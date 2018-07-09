import _ from 'lodash';

function getSegmentData(traceDataPayload) {
  const parsedTraceDataPayload = traceDataPayload && JSON.parse(traceDataPayload);
  return _.nth(parsedTraceDataPayload, 3) || [];
}

function getSegmentWithoutChildren(segment, id, hasNoChildren) {
  const parentSegment = _.take(segment, 3);
  return {
    start: parentSegment[0],
    end: parentSegment[1],
    name: parentSegment[2],
    id,
    hasNoChildren,
  };
}

function getChildSegment(segment) {
  return _.nth(segment, 4) || [];
}

function flattenChildren(childArray, results, parentSegmentId, callback) {
  return _.reduce(childArray,
    (result, child) => callback(child, result, parentSegmentId),
    results);
}

function flattenSegmentData(segment = [], results = [], parentId = 'root') {
  const childArray = getChildSegment(segment);
  const hasNoChildren = _.isEmpty(childArray);
  const parentSegmentId = _.uniqueId(`${parentId}:`);
  const parentSegment = getSegmentWithoutChildren(segment, parentSegmentId, hasNoChildren);

  results.push(parentSegment);

  return flattenChildren(childArray, results, parentSegmentId, flattenSegmentData);
}

function getDuration(segmentData) {
  return segmentData.end - segmentData.start;
}

function getTotalTimeRunning(flattenedSegmentData) {
  const startTime = flattenedSegmentData[0].start;
  const segmentWithMaxEnd = _.maxBy(flattenedSegmentData, segment => segment.end) || {};

  const endTime = segmentWithMaxEnd.end;
  return endTime - startTime;
}

function getDurationPercentage(durationTime, totalRunTime) {
  return durationTime / totalRunTime;
}

function getSlowestSegmentKey(segments) {
  const segmentsWithNoChildren = _.filter(segments, 'hasNoChildren');
  return _.maxBy(segmentsWithNoChildren, 'durationTime') || {};
}

function mapApplicationStateFromJson(segmentData) {
  const flattenedSegmentData = flattenSegmentData(segmentData);
  const totalRunTime = getTotalTimeRunning(flattenedSegmentData);

  const flattenedSegmentDataSinRoot = _.tail(flattenedSegmentData);
  const segments = _.map(flattenedSegmentDataSinRoot, (flattenedSegment) => {
    const durationTime = getDuration(flattenedSegment);
    return {
      durationTime,
      durationPercentage: getDurationPercentage(durationTime, totalRunTime),
      name: flattenedSegment.name,
      timestamp: flattenedSegment.start,
      key: flattenedSegment.id,
      hasNoChildren: flattenedSegment.hasNoChildren,
    };
  });

  const slowestSegment = getSlowestSegmentKey(segments);
  return _.map(segments, segment => ({
    ...segment,
    isSlowestSegment: segment.key === slowestSegment.key,
  }));
}

function mapApplicationState(traceDataPayload) {
  const segmentData = getSegmentData(traceDataPayload);
  return mapApplicationStateFromJson(segmentData);
}

export {
  mapApplicationState,
  mapApplicationStateFromJson,
};

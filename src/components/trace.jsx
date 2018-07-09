import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../../css/row.css';
import Duration from './duration';
import DurationPercentage from './duration-percentage';
import Timestamp from './timestamp';
import TraceName from './trace-name';

function Trace({ durationTime, durationPercentage, name, timestamp, isSlowestSegment }) {
  const rowClasses = classnames({
    row: true,
    'row-slowest-segment': isSlowestSegment,
  });

  return (
    <tr className={rowClasses}>
      <Duration durationTime={durationTime} />
      <DurationPercentage durationPercentage={durationPercentage} />
      <TraceName name={name} />
      <Timestamp timestamp={timestamp} />
    </tr>
  );
}

Trace.propTypes = {
  durationTime: PropTypes.number.isRequired,
  durationPercentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  isSlowestSegment: PropTypes.bool.isRequired,
};

export default Trace;

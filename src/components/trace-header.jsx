import React from 'react';

function TraceHeader() {
  return (
    <thead className="App App-title">
      <tr className="row">
        <th className="row-duration">
          <strong>Duration (ms)</strong>
        </th>
        <th className="row-duration-percentage">
          <strong>Duration (%)</strong>
        </th>
        <th className="row-duration-name">
          <strong>Segment</strong>
        </th>
        <th className="row-duration-timestamp">
          <strong>Timestamp (s)</strong>
        </th>
      </tr>
    </thead>
  );
}

export default TraceHeader;

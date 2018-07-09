import _ from 'lodash';
import React, { Component } from 'react';
import '../css/app.css';
import Trace from './components/trace';
import TraceHeader from './components/trace-header';
import { mapApplicationState } from './mappers/state-mapper';

function getTraceRows(traceData) {
  return _.map(traceData, trace => <Trace {...trace} />);
}

class TraceUi extends Component {
  constructor(props) {
    super(props);
    const element = document.getElementById('traceData') || {};
    const traceDataPayload = element.innerHTML;
    this.state = {
      traceData: mapApplicationState(traceDataPayload),
    };
  }

  render() {
    const { traceData } = this.state;
    return (
      <div className="App">
        <table className="full-view">
          <TraceHeader />
          <tbody>
            {getTraceRows(traceData)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TraceUi;

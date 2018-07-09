import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Meter from './meter';

function DurationPercentage({ durationPercentage }) {
  const percentage = _.trimEnd(_.round((durationPercentage * 100), 4));
  return (
    <td className="row-duration-percentage">
      <div className="row-percentage-bar">
        <Meter percent={percentage} />
      </div>
      <div className="row-percentage">
        {percentage}%
      </div>
    </td>
  );
}

DurationPercentage.propTypes = {
  durationPercentage: PropTypes.number.isRequired,
};

export default DurationPercentage;

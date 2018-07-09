import PropTypes from 'prop-types';
import React from 'react';

function Duration({ durationTime }) {
  return (
    <td className="row-duration">
      {Number(durationTime).toLocaleString()}
    </td>
  );
}

Duration.propTypes = {
  durationTime: PropTypes.number.isRequired,
};

export default Duration;

import React from 'react';
import PropTypes from 'prop-types';

function Timestamp({ timestamp }) {
  return (
    <td className="row-duration-timestamp">
      {timestamp / 1000}
    </td>
  );
}

Timestamp.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default Timestamp;

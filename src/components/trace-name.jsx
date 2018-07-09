import React from 'react';
import PropTypes from 'prop-types';

function TraceName({ name }) {
  return (
    <td className="row-duration-name">
      {name}
    </td>
  );
}

TraceName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TraceName;

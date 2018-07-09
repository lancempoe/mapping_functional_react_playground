import React from 'react';
import PropTypes from 'prop-types';

function Meter({ percent = 0 }) {
  const width = 70;
  const height = 10;
  const rounded = true;
  const color = '#666';
  const r = rounded ? Math.ceil(height / 2) : 0;
  const w = percent ? Math.max(height, width * Math.min(percent, 1)) : 0;

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="#ccc" rx={r} ry={r} />
      <rect width={w} height={height} fill={color} rx={r} ry={r} style={null} />
    </svg>
  );
}

Meter.propTypes = {
  percent: PropTypes.string.isRequired,
};

export default Meter;

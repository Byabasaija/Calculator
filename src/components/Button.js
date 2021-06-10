import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label }) => (
  <button type="button">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;

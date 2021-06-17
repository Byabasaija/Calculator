import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`btn ${label === '0' ? 'btn--span-2' : ''} ${['=', '+', '-', 'X', '÷'].includes(label) ? 'btn--orange' : ''}`}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

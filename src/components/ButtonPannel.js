import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPannel.css';

const ButtonPannel = ({ handleClick }) => (
  <div className="ButtonPannel">
    <div className="btn-group">
      <Button handleClick={() => handleClick('AC')} label="AC" />
      <Button handleClick={() => handleClick('+/-')} label="+/-" />
      <Button handleClick={() => handleClick('%')} label="%" />
      <Button handleClick={() => handleClick('÷')} label="÷" />
    </div>

    <div className="btn-group">
      <Button handleClick={() => handleClick('7')} label="7" />
      <Button handleClick={() => handleClick('8')} label="8" />
      <Button handleClick={() => handleClick('9')} label="9" />
      <Button handleClick={() => handleClick('X')} label="X" />
    </div>

    <div className="btn-group">
      <Button handleClick={() => handleClick('4')} label="4" />
      <Button handleClick={() => handleClick('5')} label="5" />
      <Button handleClick={() => handleClick('6')} label="6" />
      <Button handleClick={() => handleClick('-')} label="-" />
    </div>

    <div className="btn-group">
      <Button handleClick={() => handleClick('1')} label="1" />
      <Button handleClick={() => handleClick('2')} label="2" />
      <Button handleClick={() => handleClick('3')} label="3" />
      <Button handleClick={() => handleClick('+')} label="+" />
    </div>

    <div className="btn-group">
      <Button handleClick={() => handleClick('0')} label="0" />
      <Button handleClick={() => handleClick('.')} label="." />
      <Button handleClick={() => handleClick('=')} label="=" />
    </div>
  </div>
);

ButtonPannel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPannel;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = (props) => {
  const {
    id, type, value, onInputChange, label,
  } = props;

  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focus();
  });
  return (
    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input
        ref={inputRef}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

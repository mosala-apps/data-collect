import React, { useEffect, useState } from 'react';
import styleSheet from './FormFieldInput.style';
import { FormControl, Input, WarningOutlineIcon } from "native-base";
import PropTypes from 'prop-types';

const FormFieldInput = ({type, placeholder, rules, label, defaultValue, value, onInput}) => {
  /**
   * States+
   */
  const [currentValue, setCurrentValue] = useState(value || defaultValue)
  
  // /**
  //  * Hooks
  //  */
  // useEffect(() => {
  //   setCurrentValue(value)
  // }, [value])

  // useEffect(() => {
  //   if (value === null || value === undefined) {
  //     setCurrentValue(defaultValue)
  //     onInput(defaultValue)
  //   }
  // }, [defaultValue])

  /**
   * Actions
   */
  const handleChange = (payload) => {
    setCurrentValue(payload)
    onInput(payload)
  }

  return (
    <FormControl>
      <FormControl.Label>{label} {rules && rules.match(/required/i)  ? '*' : ''}</FormControl.Label>
      <Input
        type={type}
        value={currentValue}
        placeholder={placeholder}
        onChangeText={handleChange}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        At least 6 characters are required.
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

FormFieldInput.defaultProps = {
  rules: '',
  defaultValue: null,
  value: null,
  onInput: () => {},
}

FormFieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
}
export default FormFieldInput;

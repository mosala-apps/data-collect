import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import DynamicField from './DynamicField';

const FormFieldInput = ({
  type,
  placeholder,
  rules,
  label,
  defaultValue,
  value,
  name,
  onInput,
  control,
  errors
}) => {
  /**
   * States
   */
  const [currentValue, setCurrentValue] = useState(value)
  
  /**
   * Hooks
   */
  useEffect(() => {
    if (value === null || value === undefined) {
      setCurrentValue(defaultValue)
    } else {
      setCurrentValue(value)
    }
  }, [value])

  useEffect(() => {
    if (value === null || value === undefined) {
      setCurrentValue(defaultValue)
      onInput(defaultValue)
    }
  }, [defaultValue])

  const additionalRules = useMemo(() => {
    const allRules = {}
    if (type === 'number') {
      allRules.pattern = /^\d+(\.\d+)?$/
    }
    return allRules
  }, [type])

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: !!(rules && rules.match(/required/i)),
          ...additionalRules
        }}
        render={({ field: { onChange, onBlur } }) => (
          <DynamicField
            type={type}
            placeholder={placeholder}
            rules={rules}
            label={label}
            name={name}
            errors={errors}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            onInput={($event) => {onInput($event); onChange($event)}}
            onBlur={onBlur}
          />
        )}
        name={name}
      />
    </>
  );
}

FormFieldInput.defaultProps = {
  rules: '',
  defaultValue: null,
  value: null,
  onInput: () => { console.log('Input changed') },
}

FormFieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.string,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}
export default FormFieldInput;

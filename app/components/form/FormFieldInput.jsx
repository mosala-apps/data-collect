import React, { useEffect, useMemo, useState } from 'react';
import styleSheet from './FormFieldInput.style';
import { FormControl, Input, Radio, WarningOutlineIcon } from "native-base";
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import variableStyle from '../../config/variable.style';

const FormFieldInput = ({type, placeholder, rules, label, defaultValue, value, onInput}) => {
  /**
   * States+
   */
  const [currentValue, setCurrentValue] = useState(value)
  const [isPickerVisible, setIsPickerVisible] = useState(false)
  
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

  const currentValueDate = useMemo(() => currentValue ? new Date(currentValue) : new Date() , [currentValue])
  const currentValueDateLabel = useMemo(() => {
    let payload = null
    try {
      if (currentValue && type === 'date') {
        payload = format(new Date(currentValue), 'dd/MM/yyyy')
      }
    } catch (error) {
      console.log(error)
    }
    return payload
  }, [currentValue])

  /**
   * Actions
   */
  const handleChange = (payload) => {
    setCurrentValue(payload)
    onInput(payload)
  }

  const toggleDatePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  }

  const handleConfirmDate = (date) => {
    toggleDatePicker();
    const dateFormatted = format(date, 'yyyy-MM-dd')
    setCurrentValue(dateFormatted)
    onInput(dateFormatted)
  }

  return (
    <FormControl>
      <FormControl.Label>{label} {rules && rules.match(/required/i)  ? '*' : ''}</FormControl.Label>
      {type === 'date' && 
        <>
          <Button
            uppercase={false}
            labelStyle={{color: 'black'}}
            icon="calendar"
            mode="outlined"
            onPress={toggleDatePicker}
          >
            {currentValueDateLabel || placeholder}
          </Button>
          <DateTimePickerModal
            isVisible={isPickerVisible}
            date={currentValueDate}
            maximumDate={new Date()}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={toggleDatePicker}
          />
        </>
      }

      {type === 'boolean' &&
        <>
          <Radio.Group
            name={label}
            value={currentValue}
            onChange={handleChange}
          >
            <Radio value="1" my={1}>Oui</Radio>
            <Radio value="0" my={1}>Non</Radio>
          </Radio.Group>
        </>
      }

      {type !== 'date' && type !== 'boolean' &&
        <>
          <Input
            type={type}
            value={currentValue}
            placeholder={placeholder}
            onChangeText={handleChange}
          />
        </>
      }
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

import React, { useMemo, useState } from 'react'
import { Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { FormControl, Input, Radio, WarningOutlineIcon } from "native-base";
import PropTypes from 'prop-types';
import { Text } from 'react-native';

 const DynamicField = ({
  type,
  placeholder,
  rules,
  label,
  name,
  errors,
  currentValue,
  setCurrentValue,
  onInput,
  onBlur,
}) => {
  /**
   * States
   */
  const [isPickerVisible, setIsPickerVisible] = useState(false)

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

  /**
   * Hooks
   */
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

  return (
    <FormControl isInvalid={errors[name]}>
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
            name={name}
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
            onBlur={onBlur}
          />
        </>
      }
      <Text>
        {JSON.stringify(errors[name])}
      </Text>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        { errors[name] && errors[name].type === 'required' && 'Ce champ est requis' }
        { errors[name] && errors[name].type === 'pattern' && 'Ce champ ne peut contenir que des données numérique (e.g. 1000 ou 1000.01)' }
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

DynamicField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentValue: PropTypes.string,
  errors: PropTypes.object.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default DynamicField;
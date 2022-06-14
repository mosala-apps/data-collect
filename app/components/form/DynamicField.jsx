import React, { useEffect, useMemo, useState } from 'react'
import { Button, IconButton, RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { FormControl, Input, WarningOutlineIcon } from "native-base";
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import variableStyle from '../../config/variable.style';

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
  onChangeForValidator,
  onBlur,
}) => {
  /**
   * States
   */
  const [isPickerVisible, setIsPickerVisible] = useState(false)

  /**
   * Hooks
   */
  useEffect(() => {
    if (currentValue) {
      onChangeForValidator(currentValue)
    }
  }, [currentValue]);

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

  const resetDate = () => {
    setCurrentValue(null)
    onInput(null)
  }

  return (
    <FormControl isInvalid={errors[name]}>
      <FormControl.Label>{label} {rules && rules.match(/required/i)  ? '*' : ''}</FormControl.Label>
      {type === 'date' && 
        <>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Button
                uppercase={false}
                labelStyle={{color: 'black', fontWeight: 'normal'}}
                icon="calendar"
                mode="outlined"
                onPress={toggleDatePicker}
              >
                {currentValueDateLabel || placeholder}
              </Button>
            </View>
            { currentValue &&
                <IconButton
                  icon="close"
                  color="red"
                  size={20}
                  onPress={resetDate}
                />
            }
          </View>
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
          <RadioButton.Group onValueChange={handleChange} value={currentValue}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="1" color={variableStyle.secondaryColor} />
              <Text>Oui</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="0" color={variableStyle.secondaryColor} />
              <Text>Non</Text>
            </View>
          </RadioButton.Group>
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
  onChangeForValidator: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default DynamicField;
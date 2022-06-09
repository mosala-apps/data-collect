import React from 'react';
import styleSheet from './FormFieldInput.style';
import { FormControl, Input, WarningOutlineIcon } from "native-base";

const FormFieldInput = ({field}) => {
  return (
    <FormControl>
      <FormControl.Label>{field.name} {field.rules && field.rules.match(/required/i)  ? '*' : ''}</FormControl.Label>
      <Input
        type={field.form_field_type.name}
        defaultValue={field.default_value}
        placeholder={'Entrer ' + field.name}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        At least 6 characters are required.
      </FormControl.ErrorMessage>
    </FormControl>
  );
}

export default FormFieldInput;

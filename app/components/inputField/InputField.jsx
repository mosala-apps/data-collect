import React from 'react';
import { View, TextInput, Text} from 'react-native';
import { Controller } from 'react-hook-form';
import { styles } from '../../screens/auth/signin/signin.style';

function InputField({
  control, rules, name, secureTextEntry, placeholder, errors,labelTextError
}) {
  const renderSigninInputTypeStyle = () => {
    if (errors !== undefined && Object.keys(errors).length !== 0) {
      return styles.signinFormInputError;
    }
    return styles.signinFormInput;
  };
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={renderSigninInputTypeStyle()}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
          />
        )}
      />
       {errors
            && <Text style={styles.signinTextError}>{labelTextError}</Text>}
    </View>
  );
}

export default InputField;

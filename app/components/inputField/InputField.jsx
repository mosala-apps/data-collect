import React from 'react';
import { View, TextInput,Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { styles } from '../../screens/auth/signin/signin.style';

function InputField({
  control, rules, name,secureTextEntry,placeholder
}) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.signinFormInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
          />
        )}
      />
    </View>
  );
}

export default InputField;

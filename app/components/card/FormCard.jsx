import React from 'react';
import { Platform, View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styleSheet from './FormCard.style';

function FormCard({ form, navigation }) {
  const handlePress = () => {
    console.log('FormCard pressed');
    navigation.navigate('ShowForm', { id: form.id });
  }
  return (
    <TouchableNativeFeedback
      style={styleSheet.container}
      onPress={handlePress}
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
    >
      <View>
        <Text style={styleSheet.containerText}>{form.title}</Text>
        <Text style={styleSheet.containerTextRecurrence}>{form.form_recurrence.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

FormCard.propTypes = {
  form: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormCard;

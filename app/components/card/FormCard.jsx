import React from 'react';
import {
  Platform, View, Text, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styleSheet from './FormCard.style';

function FormCard({ form, navigation }) {
  console.log('form', form.id);
  const handlePress = () => {
    console.log('FormCard pressed');
    navigation.navigate('ShowForm', { id: form.id });
  };
  return (
    <TouchableHighlight
      style={styleSheet.container}
      onPress={handlePress}
      // background={Platform.OS === 'android' ? TouchableHighlight.SelectableBackground() : ''}
    >
      <View>
        <Text style={styleSheet.containerText}>{form.title}</Text>
        <Text style={styleSheet.containerTextRecurrence}>{form.form_recurrence.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

FormCard.propTypes = {
  form: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormCard;

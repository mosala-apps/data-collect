import React, { useMemo } from 'react';
import {
  Platform, View, Text, TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import styleSheet from './FormCard.style';
import { useNavigation } from '@react-navigation/native';

function FormCard({ form }) {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ShowForm', { id: form.id });
  };

  const formRecurrenceName = useMemo(
    () => {
      if (!form || !form.form_recurrence) {
        return '-'
      }
      switch (form.form_recurrence.name) {
        case 'jour':
          return 'Journalier';
        case 'semaine':
          return 'Hebdomadaire';
        case 'mois':
          return 'Mensuel';
        case 'année':
          return 'Mensuel';
        default:
          return 'Aucune récurrence';
      }
    }, [form]);

  return (
    <TouchableNativeFeedback
      onPress={handlePress}
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
    >
      <View style={styleSheet.container}>
        <Text style={styleSheet.containerText}>{form.title}</Text>
        <Text style={styleSheet.containerTextRecurrence}>{formRecurrenceName}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

FormCard.propTypes = {
  form: PropTypes.object.isRequired,
};

export default FormCard;

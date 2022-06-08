import React from 'react';
import {
  SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import styleSheet from './createForm.style';
import FormView from '../../components/form/formView';

function CreatForm({ navigation }) {
  return (
    <SafeAreaView style={styleSheet.container}>
      <ScrollView>
        <FormView navigation={navigation} />

      </ScrollView>
    </SafeAreaView>
  );
}

export default CreatForm;

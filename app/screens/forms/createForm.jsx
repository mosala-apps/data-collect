import React from 'react';
import {
  SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import styleSheet from './CreateForm.style';
import FormView from '../../components/form/formView';

function CreateForm({ navigation }) {
  return (
    <SafeAreaView style={styleSheet.container}>
      <ScrollView>
        <FormView navigation={navigation} />

      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateForm;

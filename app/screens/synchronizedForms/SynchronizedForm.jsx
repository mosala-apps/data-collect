import React from 'react';
import { SafeAreaView} from 'react-native';
import { statusForm } from '../../config/variables';
import FormSubmissionCard from '../../components/card/FormSubmissionCard';
import styleSheet from './SynchronizedForm.style'


export default function SynchronizedForms({navigation}) {
  return (
    <SafeAreaView style={styleSheet.container}>
      <FormSubmissionCard navigation={navigation} statusForm={statusForm.synchronized}/> 
    </SafeAreaView>
  );
}




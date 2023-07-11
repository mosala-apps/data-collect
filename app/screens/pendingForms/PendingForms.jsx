import React from 'react';
import { SafeAreaView} from 'react-native';
import { statusForm } from '../../config/variables';
import styleSheet from './PendingForms.style';
import FormSubmissionCard from '../../components/card/FormSubmissionCard';


export default function PendingForms({navigation}) {

  return (
    <SafeAreaView style={styleSheet.container}>
      <FormSubmissionCard navigation={navigation} statusForm={statusForm.saved}/> 
    </SafeAreaView>
  );
}

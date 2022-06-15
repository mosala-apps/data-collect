import React from 'react';
import { SafeAreaView} from 'react-native';
import { statusForm } from '../../config/variables';
import styleSheet from './Drafts.style';
import FormSubmissionCard from '../../components/card/FormSubmissionCard';


export default function Drafts({navigation}) {
  
  return (
    <SafeAreaView style={styleSheet.container}>
      <FormSubmissionCard navigation={navigation} statusForm={statusForm.draft}/> 
    </SafeAreaView>
  );
}

import React, { useEffect, useState, useMemo } from 'react';
import { SafeAreaView} from 'react-native';
import { fetchFormsByHospital } from '../../services/formService'
import { statusForm } from '../../config/variables';
import { useSelector } from 'react-redux';
import styleSheet from './Drafts.style';
import FormSubmissionCard from '../../components/card/FormSubmissionCard';


export default function Drafts({navigation}) {

  const [forms , setForms] = useState([])

    /**
   * Store
   */
     const user = useSelector((state) => state.auth.user);
     

  useEffect(()=>{
  },[user])

  
  return (
    <SafeAreaView style={styleSheet.container}>
      <FormSubmissionCard navigation={navigation} statusForm={statusForm.draft}/> 
    </SafeAreaView>
  );
}

import React, { useEffect, useState, useMemo } from 'react';
import { SafeAreaView} from 'react-native';
import { fetchFormsByHospital } from '../../services/formService'
import { statusForm } from '../../config/variables';
import { useSelector } from 'react-redux';
import FormSubmissionCard from '../../components/card/FormSubmissionCard';
import styleSheet from './SynchronizedForm.style'


export default function SynchronizedForms({navigation}) {

  const [forms , setForms] = useState([])



    /**
   * Store
   */
     const user = useSelector((state) => state.auth.user);
     

  useEffect(()=>{
    FormsByHospital()
  },[user])

  const FormsByHospital = async()=>{
    const data = await fetchFormsByHospital({hospitalId:user.hospital.id,status:statusForm.sync})
    setForms(data)
    return data
  }

  return (
    <SafeAreaView style={styleSheet.container}>
      <FormSubmissionCard navigation={navigation} statusForm={statusForm.sync}/> 
    </SafeAreaView>
  );
}




import React, { useState, useMemo,useEffect } from 'react';
import styleSheet from './ResolveConflictForm.style';
import { IconButton} from 'react-native-paper';
import {  ScrollView } from 'native-base';
import {
   Text,
   View,
   ActivityIndicator,
   ToastAndroid
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormConflictView from '../../components/form/FormConflictView';
import { useSelector,useDispatch } from 'react-redux';
import {  fetchForm,updateForm } from '../../services/formService'
import { getCompletedFormByHospital,completedFormHistoryStore } from '../../store/completedForm/completedFormAsyncQueries';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { hospitalManagerNamesSelector, setCountConflict } from '../../store';

function ResolveConflictForm({navigation,route}){
  const currentFormId = +route.params.id;
  const paramsSavedFormId = +route.params.savedFormId;
  const [currentStep, setCurrentStep] = useState(1)
  const [loadingLocal, setLoadingLocal] = useState(true)
  const [loadingOnLine, setLoadingOnline] = useState(true)
  const [completedFormLocal, setCompletedFormLocal] = useState(
    {
      completed_form_fields: {}
    }
    )
  const [completedForm, setCompletedForm] = useState(
    {
      completed_form_fields: {}
    }
    )
  const [completeFormOnline, setCompleteFormOnline] = useState(null)
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === currentFormId);
  const formHook = useForm({});
  const dispatch = useDispatch();
  const hospitalManager = useSelector(hospitalManagerNamesSelector);

  useEffect(() => {
    if (paramsSavedFormId) {
      fetchFormToLocal()
    } 
    fetchCompletedFormOnline()
  }, []);

const fetchFormToLocal = () => {
  setLoadingLocal(true)
    fetchForm(paramsSavedFormId)
      .then((form) => {
        if (form && form.payload) {
          setCompletedFormLocal(JSON.parse(form.payload))
        }
        setLoadingLocal(false)
      })
      .catch((erreur) =>{
        setLoadingLocal(false)
      }
   )
  }
 const fetchCompletedFormOnline = () => {
    setLoadingOnline(true)
    getCompletedFormByHospital({
      form_id:currentFormId,
      hospital_id:hospital.id,
      last_update:route.params.last_update
    })
      .then((completedForms) => {
        if(completedForms){
          setCompleteFormOnline(completedForms)
        }
        setLoadingOnline(false)
      })
      .catch((error) =>{
        console.log(error);
        if (error && error.response && error.response.status === 0) {
          ToastAndroid.show('Veuillez activer votre connexion internet pour accéder à ces informations', ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Votre session a expirer veuillez vous reconnecter svp", ToastAndroid.LONG);
        }
        navigation.goBack();
        setLoadingOnline(false)
      })
  }

  const handleCompleteForm = () =>{
    completedForm.created_manager_name = hospitalManager.name
    completedForm.created_manager_first_name = hospitalManager.firstName
    completedForm.hospital_id = hospital.id
    completedForm.form_id = currentFormId
    completedFormHistoryStore({
      form_id:currentFormId,
      hospital_id:hospital.id,
      completed_form_fields:completedForm.completed_form_fields,
      completed_form_id:completeFormOnline[0].id,
      completed_form_history_id:paramsSavedFormId,
      created_manager_name:hospitalManager.name,
      created_manager_first_name:hospitalManager.firstName,
      last_update: completeFormOnline[0].last_update
    })
      .then(async()=>{
        await updateForm(paramsSavedFormId, {conflictResolved: 1})
        dispatch(setCountConflict(1))
        ToastAndroid.show('Formulaire sauvegardé avec succès', ToastAndroid.SHORT);
        navigation.navigate('Home')
      })
      .catch(()=>{
        ToastAndroid.show('Impossible de sauvegarder votre formulaire', ToastAndroid.SHORT);
      })
  }

  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View>
            <IconButton
              icon="arrow-left"
              color="white"
              size={20}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Text style={styleSheet.headerTitle}>Revenir aux formulaires</Text>
          </View>
        </View>
      </View>
      <View style={styleSheet.bodyContainer}>
        <ScrollView>
          {
            loadingLocal || loadingOnLine ? (
              <ActivityIndicator size="large" />
            ):(
              <FormConflictView
              completedForm={completedForm} 
              lastUpdate={format(new Date(completedFormLocal.last_update), 'dd/MM/yyyy')}
              completeFormOnline={completeFormOnline}
              completedFormLocal={completedFormLocal}
              form={selectedForm}
              formTitle={route.params.formTitle}
              currentStep={currentStep}
              formHook={formHook}
              handleCompleteForm={handleCompleteForm}
              setCurrentStep={setCurrentStep}
              setCompletedForm={setCompletedForm}
              setCompleteFormOnline={setCompleteFormOnline}
               />
            )
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ResolveConflictForm;
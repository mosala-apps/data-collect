import React,  { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView, Text, ToastAndroid, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { Menu, Pressable } from 'native-base';
import styleSheet from './CreateForm.style';
import FormView from '../../components/form/FormView';
import { useSelector } from 'react-redux';
import { storeForm, updateForm, fetchFormsByHospital, fetchForm, destroyForm } from '../../services/formService'
import { Ionicons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { statusForm } from '../../config/variables';
import { hospitalManagerNamesSelector } from '../../store';
import { fetchCompletedForm } from '../../store/completedForm/completedFormAsyncQueries';

function CreateForm({ route, navigation }) {
  const currentFormId = +route.params.id;
  const paramsSavedFormId = +route.params.savedFormId;
  const paramsOnlineFormId = +route.params.onlineFormId;
  /**
   * State
   */
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [existedLastUpdates, setExistedLastUpdates] = useState([])
  const [savedFormId, setSavedFormId] = useState(paramsSavedFormId)
  const [savedForm, setSavedForm] = useState(null)
  const [completedForm, setCompletedForm] = useState(
    {
      completed_form_fields: {}
    }
  )

  /**
   * Store
   */
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === currentFormId);
  const hospitalManager = useSelector(hospitalManagerNamesSelector);

  /**
   * Hooks
   */
  // { control, handleSubmit, formState: { errors, isValid }, reset }
  const formHook = useForm({});

  useEffect(() => {
    if (paramsSavedFormId) {
      fetchFormToLocal()
    } else if (paramsOnlineFormId) {
      fetchCompletedFormOnline()
    } else {
      setLoading(false)
    }
    loadExistedLastUpdates()
  }, []);

  /**
   * Actions
   */
  const fetchFormToLocal = () => {
    setLoading(true)
    fetchForm(paramsSavedFormId)
      .then((form) => {
        setSavedForm(form)
        if (form && form.payload) {
          setCompletedForm(JSON.parse(form.payload))
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const fetchCompletedFormOnline = () => {
    setLoading(true)
    fetchCompletedForm(paramsOnlineFormId)
      .then((payloadCompletedForm) => {
        const payload = {
          last_update: payloadCompletedForm.last_update,
          created_manager_first_name: payloadCompletedForm.created_manager_first_name,
          created_manager_name: payloadCompletedForm.created_manager_name,
          completed_form_fields: payloadCompletedForm.completed_form_fields
            .map((completedFormField) => {
              return {
                formFieldId : completedFormField.form_field_id,
                value : completedFormField.value
              }
            })
            .reduce((acc, completedFormField) => ({...acc, [completedFormField.formFieldId] : completedFormField.value}), {})
        }
        setCompletedForm(payload)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        if (error && error.response && error.response.status === 0) {
          ToastAndroid.show('Veuillez activer votre connexion internet pour accéder à ces informations', ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Une erreur se produite, impossible d'accéder à ces informations", ToastAndroid.LONG);
        }
        navigation.goBack();
        setLoading(false)
      })
  }

  const loadExistedLastUpdates = async () => {
    let lastUpdates = selectedForm.completed_forms.map((payload) => payload.last_update)
    const data = await fetchFormsByHospital({hospitalId: hospital.id, notStatus: statusForm.draft })
    lastUpdates = [...lastUpdates, ...data.map((form) => JSON.parse(form.payload).last_update)]
    setExistedLastUpdates(lastUpdates)
  }

  const handleSaveInDraft = () => {
    if (savedFormId) {
      onUpdateForm()
    } else {
      onSaveFormInDraft()
    }
  }

  const onUpdateForm = () => {
    updateForm(savedFormId, {
      payload: JSON.stringify(completedForm),
      hospitalId: hospital.id,
      formTitle: selectedForm.title,
      formId: currentFormId,
      date: (new Date()).toISOString(),
      status: statusForm.draft
    })
      .then(() => {
        ToastAndroid.show('Formulaire mis à jour avec succès', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Impossible de sauvegarder votre formulaire', ToastAndroid.SHORT);
      });
  }

  const onSaveFormInDraft = () => {
    storeForm({
      payload: JSON.stringify(completedForm),
      hospitalId: hospital.id,
      formTitle: selectedForm.title,
      formId: currentFormId,
      date: (new Date()).toISOString(),
      status: statusForm.draft
    })
      .then((formId) => {
        setSavedFormId(formId);
        ToastAndroid.show('Formulaire enregistré en brouillon avec succès', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Impossible de sauvegarder votre formulaire', ToastAndroid.SHORT);
      });
  }

  const handleCompleteForm = () => {
    completedForm.created_manager_name = hospitalManager.name
    completedForm.created_manager_first_name = hospitalManager.firstName
    completedForm.hospital_id = hospital.id
    completedForm.form_id = currentFormId
    storeForm({
      payload: JSON.stringify(completedForm),
      hospitalId: hospital.id,
      formTitle: selectedForm.title,
      formId: currentFormId,
      date: (new Date()).toISOString(),
      status: statusForm.saved
    })
      .then(() => {
        if (paramsSavedFormId) {
          destroyForm(paramsSavedFormId)
        }
        ToastAndroid.show('Formulaire sauvegardé avec succès', ToastAndroid.SHORT);
        navigation.goBack()
      })
      .catch(() => {
        ToastAndroid.show('Impossible de sauvegarder votre formulaire', ToastAndroid.SHORT);
      });
  }

  const handleReset = () => {
    setCompletedForm({completed_form_fields: {}})
    formHook.reset({})
    setCurrentStep(1)
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
            <Text style={styleSheet.headerTitle}>{ selectedForm.title }</Text>
          </View>
        </View>
        <View>
          <Menu w="220" trigger={(triggerProps) => {
            return (<Pressable accessibilityLabel="More options menu" {...triggerProps}>
                <Ionicons name="ellipsis-vertical" size={20} color="white" />
              </Pressable>)
            }}>
            <Menu.Item onPress={handleSaveInDraft}>Enregistrer dans le brouillon</Menu.Item>
            <Menu.Item onPress={handleReset}>Réinitialiser</Menu.Item>
          </Menu>
        </View>
      </View>
      <View style={styleSheet.bodyContainer}>
        <ScrollView>
          {
            loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <FormView
                form={selectedForm}
                completedForm={completedForm}
                currentStep={currentStep}
                formHook={formHook}
                existedLastUpdates={existedLastUpdates}
                setCompletedForm={setCompletedForm}
                setCurrentStep={setCurrentStep}
                handleCompleteForm={handleCompleteForm}
                disableFields={!!paramsOnlineFormId || (savedForm && [statusForm.synchronized].includes(savedForm.status))}
                disableLastUpdate={!!paramsOnlineFormId || (savedForm && [statusForm.saved, statusForm.synchronized].includes(savedForm.status))}
                showSubmitAction={(!savedForm || ![statusForm.synchronized].includes(savedForm.status)) && !paramsOnlineFormId}
              />
            )
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default CreateForm;

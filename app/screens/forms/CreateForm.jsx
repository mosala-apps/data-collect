import React,  { useEffect, useState } from 'react';
import {
  ScrollView, Text, ToastAndroid, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { Menu, Pressable } from 'native-base';
import styleSheet from './CreateForm.style';
import FormView from '../../components/form/FormView';
import { useSelector } from 'react-redux';
import { storeForm, updateForm, fetchFormsByHospital, fetchForm } from '../../services/formService'
import { Ionicons } from '@expo/vector-icons';
import { statusForm } from '../../config/variables';

function CreateForm({ route, navigation }) {
  const currentFormId = route.params.id;
  const paramsSavedFormId = route.params.savedFormId;
  /**
   * State
   */
  const [currentStep, setCurrentStep] = useState(1)
  const [savedFormId, setSavedFormId] = useState(paramsSavedFormId)
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

  /**
   * Hooks
   */
  useEffect(() => {
    if (paramsSavedFormId) {
      fetchForm(paramsSavedFormId).then((form) => {
        if (form && form.payload) {
          setCompletedForm(JSON.parse(form.payload))
        }
      })
    }
  }, []);

  /**
   * Actions
   */
  const handleSaveInDraft = () => {
    if (savedFormId) {
      onUpdateForm()
    } else {
      onSaveForm()
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

  const onSaveForm = () => {
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
        ToastAndroid.show('Formulaire sauvegardé avec succès', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Impossible de sauvegarder votre formulaire', ToastAndroid.SHORT);
      });
  }

  const handleReset = () => {
    setCompletedForm({completed_form_fields: {}})
    setCurrentStep(1)
  }

  // try {
    // fetchFormsByHospital({hospitalId: hospital.id, status: 'draft'})
      // .then(response => console.log('response', response));
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <IconButton
              icon="arrow-left"
              color="white"
              size={20}
              onPress={() => navigation.navigate('ShowForm', { id: currentFormId })}
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
          <FormView
            form={selectedForm}
            navigation={navigation}
            completedForm={completedForm}
            currentStep={currentStep}
            setCompletedForm={setCompletedForm}
            setCurrentStep={setCurrentStep}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default CreateForm;

import React,  { useState } from 'react';
import {
  ScrollView, Text, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { Menu, Pressable } from 'native-base';
import styleSheet from './CreateForm.style';
import FormView from '../../components/form/FormView';
import { useSelector } from 'react-redux';
import { fetchAllForms } from '../../services/formService'
import { Ionicons } from '@expo/vector-icons';

function CreateForm({ route, navigation }) {
  const currentFormId = route.params.id;
  /**
   * State
   */
  const [currentStep, setCurrentStep] = useState(1)
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
   * Actions
   */
  const handleSaveInDraft = () => {
    // to implement
  }
  const handleReset = () => {
    setCompletedForm({completed_form_fields: {}})
    setCurrentStep(1)
  }

  try {
    // fetchAllForms();
  } catch (error) {
    console.log(error);
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

import React, { useState } from 'react';
import {
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styleSheet from './FormView.style';
import { Button, Card, Divider } from 'react-native-paper';
import variableStyle from '../../config/variable.style';
import { hospitalManagerNamesSelector } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FormFieldInput from './FormFieldInput';
import { useMemo } from 'react';
function FormView({ form }) {

  /**
   * State
   */
  const [currentStep, setCurrentStep] = useState(1)

  /**
   * Store
   */
   const hospitalManager = useSelector(hospitalManagerNamesSelector);

  /**
   * Hooks
   */
  const navigation = useNavigation();
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * Actions
   */
  const submitStep = useMemo(() => currentStep === form.form_steps.length + 1, [currentStep, form])


  return (
    <View style={styleSheet.container}>
      <Card>
        <Card.Content>
          <View>
            <Text style={{textAlign: 'center'}}>Vous soumettez vos données en tant que : </Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{ hospitalManager.name } { hospitalManager.firstName }</Text>
            <Button
              labelStyle={{ fontWeight: 'normal'}}
              uppercase={false}
              color="#aaa"
              mode="text"
              icon="pencil"
              compact
              onPress={() => navigation.navigate('Settings')}
            >
              Cliquez-ici pour modifier
            </Button>
          </View>
          <Divider style={{marginVertical: 10}} />
          <View>
            <Text>* Champs requis</Text>
          </View>
        </Card.Content>
      </Card>

      <View style={{marginVertical: 10}}>
        <Card style={styleSheet.stepCard}>
          <Card.Content>
            { form.form_steps && form.form_steps.length > 0 &&
              (submitStep 
                  ? <Text style={styleSheet.stepCardText}>Confirmation</Text>
                  : <Text style={styleSheet.stepCardText}>{form.form_steps[currentStep - 1].title}</Text>
              )
            }
            {
              (!form.form_steps || form.form_steps.length == 0) &&
              <Text>Aucune étape n'a encore été configurée sur ce formulaire</Text> 
            }
          </Card.Content>
        </Card>

        <View style={styleSheet.formFieldsView}>
          { !submitStep && form.form_steps[currentStep - 1].form_fields.length > 0 &&
              form.form_steps[currentStep - 1].form_fields.map((field, index) => (
                <Card style={ index === 0 ? {...styleSheet.formFieldCard, ...styleSheet.formFieldCardFirst} : styleSheet.formFieldCard}>
                  <Card.Content>
                    <FormFieldInput
                      field={field}
                      key={'form-field-' + field.id}
                    />
                  </Card.Content>
                </Card>
              ))
          }
          { !submitStep && form.form_steps[currentStep - 1].form_fields.length === 0 &&
            <Card style={{...styleSheet.formFieldCard, ...styleSheet.formFieldCardFirst}}>
              <Card.Content>
                <Text>Aucun champ créer sur cette étape pour l'instant</Text>
              </Card.Content>
            </Card>
          }
        </View>
      </View>
      
      <View style={styleSheet.containerButton}>
        <Button
          disabled
          color={variableStyle.secondaryColor}
          labelStyle={{color: 'white', textTransform: 'capitalize'}}
          mode="contained"
          onPress={() => {}}
        >
          Précédent
        </Button>
        <Button
          color={variableStyle.secondaryColor}
          labelStyle={{color: 'white', textTransform: 'capitalize'}}
          mode="contained"
          onPress={() => {}}
        >
          Suivant
        </Button>
      </View>
    </View>
  );
}
FormView.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
export default FormView;

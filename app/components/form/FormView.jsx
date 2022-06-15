import React, { useState, useMemo } from 'react';
import {
  Text, View
} from 'react-native';
import PropTypes from 'prop-types';
import styleSheet from './FormView.style';
import { Button, Card, Divider } from 'react-native-paper';
import variableStyle from '../../config/variable.style';
import { hospitalManagerNamesSelector } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FormFieldInput from './FormFieldInput';
import { Ionicons } from '@expo/vector-icons';
import { FormControl, WarningOutlineIcon } from 'native-base';
function FormView({
  form,
  completedForm,
  setCompletedForm,
  currentStep,
  setCurrentStep,
  handleCompleteForm,
  formHook,
  existedLastUpdates,
  disableFields,
  disableLastUpdate,
  showSubmitAction,
}) {

  /**
   * State
   */
  const [maxStepReached, setMaxStepReached] = useState(1)

  /**
   * Store
   */
   const hospitalManager = useSelector(hospitalManagerNamesSelector);

  /**
   * Hooks
   */
  const navigation = useNavigation();

  /**
   * Actions
   */
  const submitStep = useMemo(() => currentStep === form.form_steps.length + 1, [currentStep, form])

  const handleGotoPreviousStep = () => {
    if (currentStep - 1 >= 1 && currentStep === maxStepReached) {
      setCurrentStep(currentStep - 1)
    } else {
      if (currentStep - 1 >= 1) {
        setCurrentStep(currentStep - 1)
      }
      // this.$refs.form.validate().then(success => {
      //   if (success) {
      //     if (this.currentStep - 1 >= 1) {
      //       this.currentStep--
      //     }
      //   } else {
      //     this.showWarningErrorOnForm()
      //   }
      // })
    }
  }

  const handleGotoNextStep = () => {
    if (currentStep + 1 <= form.form_steps.length + 1) {
      setCurrentStep(currentStep + 1)
    }
    // this.$refs.form.validate().then(success => {
    //   if (success) {
    //     if (this.currentStep + 1 <= this.targetForm.form_steps.length + 1) {
    //       this.currentStep++
    //     }
    //   } else {
    //     this.showWarningErrorOnForm()
    //   }
    // })
  }

  const handleFormFieldChange = (formFieldId, value) => {
    completedForm.completed_form_fields[formFieldId] = value
    setCompletedForm({...completedForm})
  }
  const handleLastUpdateChange = (value) => {
    completedForm.last_update = value
    setCompletedForm({...completedForm})
  }


  return (
    <View style={styleSheet.container}>
      <Card>
        <Card.Content>
          <View>
            {
              hospitalManager.correct ?
              (
                <>
                  <Text style={{textAlign: 'center'}}>Vous soumettez vos données en tant que : </Text>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{ hospitalManager.name } { hospitalManager.firstName }</Text>
                </>
              ) :
              (
                <>
                  <Ionicons style={{textAlign: 'center'}} name="warning" size={24} color="red" />
                  <Text style={{textAlign: 'center', color: 'red'}}>
                    Vous devez correctement définir votre prénom et nom pour pouvoir soumettre des données
                  </Text>
                </>
              )
            }
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
                <Card
                  style={ index === 0 ? {...styleSheet.formFieldCard, ...styleSheet.formFieldCardFirst} : styleSheet.formFieldCard}
                  key={'form-field-' + field.id}
                >
                  <Card.Content>
                    <FormFieldInput
                      id={field.form_field_type.id}
                      type={field.form_field_type.name}
                      name={field.name}
                      label={field.name}
                      rules={field.rules}
                      value={completedForm.completed_form_fields[field.id]}
                      defaultValue={field.default_value}
                      placeholder={`Entrer ${field.name}`}
                      disabled={disableFields}
                      control={formHook.control}
                      errors={formHook.formState.errors}
                      onInput={(value) => handleFormFieldChange(field.id, value)}
                    />
                  </Card.Content>
                </Card>
              ))
          }
          { !submitStep && form.form_steps[currentStep - 1].form_fields.length === 0 &&
            <Card style={{...styleSheet.formFieldCard, ...styleSheet.formFieldCardFirst}}>
              <Card.Content>
                <Text style={{ textAlign: 'center'}}>Aucun champ créé sur cette étape pour l'instant</Text>
              </Card.Content>
            </Card>
          }
          {
            submitStep &&
            <Card style={{...styleSheet.formFieldCard, ...styleSheet.formFieldCardFirst}}>
              <Card.Content>
                <FormFieldInput
                  value={completedForm.last_update}
                  type='date'
                  label='Sélectionnez la date de récolte'
                  name='last_update'
                  rules='required'
                  placeholder='Veuillez choisir une date'
                  disabled={disableLastUpdate}
                  control={formHook.control}
                  errors={formHook.formState.errors}
                  onInput={(value) => handleLastUpdateChange(value)}
                />
                <View style={{paddingRight: 10 }}>
                  <FormControl isInvalid={existedLastUpdates.includes(completedForm.last_update) && !disableLastUpdate}>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                      Cette date a déjà une soumission. Veuillez choisir une autre date SVP !
                    </FormControl.ErrorMessage>
                  </FormControl>
                </View>
              </Card.Content>
            </Card>
          }
        </View>
      </View>
      
      <View>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              Etape { currentStep } sur { form.form_steps.length + 1 }
          </Text>
      </View>

      <View style={styleSheet.containerButton}>
        <Button
          disabled={currentStep === 1}
          color={variableStyle.secondaryColor}
          labelStyle={{color: variableStyle.secondaryColor, textTransform: 'capitalize'}}
          mode="outlined"
          onPress={() => handleGotoPreviousStep()}
        >
          Précédent
        </Button>
        {
          !submitStep &&
          (<Button
            color={variableStyle.secondaryColor}
            labelStyle={{color: 'white', textTransform: 'capitalize'}}
            mode="contained"
            onPress={formHook.handleSubmit(handleGotoNextStep)}
          >
            Suivant
          </Button>)
        }
        {
          submitStep && showSubmitAction &&
           (<Button
            disabled={!hospitalManager.correct || (existedLastUpdates.includes(completedForm.last_update) && !disableLastUpdate)}
            color={variableStyle.secondaryColor}
            labelStyle={{color: 'white', textTransform: 'capitalize'}}
            mode="contained"
            onPress={formHook.handleSubmit(handleCompleteForm)}
          >
            Enregistrer
          </Button>)
        }
      </View>
    </View>
  );
}

FormView.defaultProps = {
  disableFields: false,
  disableLastUpdate: false,
  showSubmitAction: true
}

FormView.propTypes = {
  completedForm: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  disableFields: PropTypes.bool,
  disableLastUpdate: PropTypes.bool,
  showSubmitAction: PropTypes.bool,
  setCompletedForm: PropTypes.func.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  handleCompleteForm: PropTypes.func.isRequired,
  existedLastUpdates: PropTypes.array.isRequired,
  formHook: PropTypes.object.isRequired,
};
export default FormView;

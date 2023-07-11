import React, { useState, useMemo, useEffect } from 'react';
import {
  Text, View
} from 'react-native';
import styleSheet from './FormConflictView.style';
import { Card,Divider,RadioButton, Button } from 'react-native-paper';
import variableStyle from '../../config/variable.style';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import PropTypes from 'prop-types';


function FormConflictView({
  formTitle,
  form,
  currentStep,
  setCurrentStep,
  completedForm,
  lastUpdate,
  completeFormOnline,
  completedFormLocal,
  formHook,
  setCompletedForm,
  handleCompleteForm
}){
  const [currentValue, setCurrentValue] = useState()
  const [maxStepReached, setMaxStepReached] = useState(1)
  const navigation = useNavigation();
  const submitStep = useMemo(() => currentStep === form.form_steps.length, [currentStep, form])




  const handleGotoPreviousStep = () => {
    if (currentStep - 1 >= 1 && currentStep === maxStepReached) {
      setCurrentStep(currentStep - 1)
    } else {
      if (currentStep - 1 >= 1) {
        setCurrentStep(currentStep - 1)
      }
    }
  }

  const handleGotoNextStep = () => {
    if (currentStep  <= form.form_steps.length + 1) {
      setCurrentStep(currentStep + 1)
    }
  }

const handleChangeOld = (payload) => {
    setCurrentValue(payload)
    form.form_steps.forEach(step => {
      step.form_fields.forEach(field =>{
        if(getResponse(field.id)){
          completedForm.completed_form_fields[field.id]= getResponse(field.id).value
        }
      })
    })
    setCompletedForm({...completedForm})
  }

const handleChangeNew = (payload) => {
    setCurrentValue(payload)
    form.form_steps.forEach(step => {
      step.form_fields.forEach(field =>{
          completedForm.completed_form_fields[field.id]= completedFormLocal.completed_form_fields[field.id]
      })
    })
    setCompletedForm({...completedForm})
  }

const changeValue =  () => {
  console.log('test')
}

const getResponse  = (formFieldId) => {
  return  completeFormOnline[0].completed_form_fields.find(field => field.form_field_id === formFieldId)
}


  return (
    <View style={styleSheet.container}>
      <Card style={styleSheet.stepCard}>
        <Card.Content>
            <Text style={styleSheet.stepCardText}>{formTitle}</Text>
        </Card.Content>
      </Card>
      <View style={styleSheet.contentSelectedModeResolve}>
        <Card style={styleSheet.cardContentModeResolve}>
          <Card.Content>
            <Text style={styleSheet.titleConflict}>Gestion des conflicts</Text>
            <Divider style={{marginVertical: 10}} />
            <RadioButton.Group onValueChange={handleChangeOld} value={currentValue}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="oldValue" color={variableStyle.secondaryColor}/>
                <Text style={styleSheet.oldSubmission}>Conserver la soumission de {completeFormOnline[0].created_manager_name}  Enregistré le  {format(new Date(completeFormOnline[0].created_at), 'dd/MM/yyyy')}</Text>
                </View>
            </RadioButton.Group>
            <RadioButton.Group onValueChange={handleChangeNew} value={currentValue}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="newValue" color={variableStyle.secondaryColor}/>
                <Text style={styleSheet.newSubmission}>Conserver ma soumission Enregistré le {lastUpdate}</Text>
                </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>
      </View>
      <View>
        <Card style={styleSheet.contentStep}>
          <Card.Content> 
            <Text style={styleSheet.titleStep}>{form.form_steps[currentStep - 1].title}</Text>
          </Card.Content>
        </Card>
      </View>
      <View>
      { form.form_steps[currentStep - 1].form_fields.length > 0 &&
              form.form_steps[currentStep - 1].form_fields.map((field, index) => (
        <Card style={styleSheet.cardResponse} key={field.id}>
          <Card.Content>
            <Text>{field.name}</Text>
            <RadioButton.Group onValueChange={changeValue} value={completedForm.completed_form_fields[field.id]}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value={getResponse(field.id).value} color={variableStyle.secondaryColor} />
                <Text style={styleSheet.oldResponse}>{getResponse(field.id).value}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value={completedFormLocal.completed_form_fields[field.id]} color={variableStyle.secondaryColor}/>
                <Text style={styleSheet.newResponse}>{completedFormLocal.completed_form_fields[field.id]}</Text>
                </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>
        ))}
      </View>
      <View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              Etape { currentStep } sur { form.form_steps.length }
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
          submitStep &&
           (<Button
            // disabled={!hospitalManager.correct || (existedLastUpdates.includes(completedForm.last_update) && !disableLastUpdate)}
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
  )
}

FormConflictView.propTypes = {
  completedForm: PropTypes.object.isRequired,
  // completeFormOnline: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  formHook: PropTypes.object.isRequired,
  setCompletedForm: PropTypes.func.isRequired,
  setCompleteFormOnline: PropTypes.func.isRequired
}


export default FormConflictView

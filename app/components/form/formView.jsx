import React from 'react';
import {
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styleSheet from './formView.style';

function FormView({ navigation }) {
  const items = [
    {
      key: 1,
      name: 'Page 1',
    },
    {
      key: 2,
      name: 'Page 2',
    },
    {
      key: 3,
      name: 'Page 3',
    },
  ];
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <View style={styleSheet.container}>
      <View>
        {
            items.map((item, index) => (
              <View style={styleSheet.containerForm} key={item.key}>
                {index === 0 ? (
                  <View style={styleSheet.containerFormStep}>
                    <Text style={styleSheet.containerFormStepTitle}>{item.name}</Text>
                  </View>
                ) : <Text />}
                <View style={styleSheet.containerFormInput}>
                  <View style={styleSheet.containerFormInputLabel}>
                    <Text style={styleSheet.containerFormInputLabelText} >Topical</Text>
                    <Text style={styleSheet.containerFormInputLabelIcon}>*</Text>
                  </View>

                  <TextInput
                 
                    editable
                    style={styleSheet.containerFormInputComponent}
                    value={''}
                    placeholder="Rechercher un formulaire"
                  />
                </View>

              </View>
            ))
        }
      </View>
      <View style={styleSheet.containerButton}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styleSheet.containerButtonLeft}>
            <Text style={styleSheet.containerButtonLeftText}>Précedent</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styleSheet.containerButtonRight}>
            <Text style={styleSheet.containerButtonRightText}>Suivant</Text>

          </View>
        </TouchableWithoutFeedback>
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

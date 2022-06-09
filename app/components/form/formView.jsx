import React from 'react';
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
function FormView({ form }) {
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

import {
  Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from 'react-native-paper';
import { styles } from './index.style';

import InputField from '../../components/inputField/InputField';
import { hospitalManagerNamesSelector, addHospitalManagerNames } from '../../store';
import variableStyle from '../../config/variable.style';

function Settings({}) {
  const dispatch = useDispatch();
  const {
    name,firstName, isLoading, isUpdated, isError,
  } = useSelector(hospitalManagerNamesSelector);
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm({
    defaultValues: {
      name,
      firstName,
    },
  });


  const onSubmit = async (data) => {
    dispatch(addHospitalManagerNames(data));
  };

  return (
    <View style={styles.settingsContainer}>
      <View
        style={styles.settingsFormBody}
      >
        <Card>
          <Card.Content>
            <View style={styles.settingsFormGroup}>
              <View style={styles.settingsFormLabel}>
                <Text>Nom*</Text>
              </View>
              <InputField
                control={control}
                name="name"
                rules={{ required: true }}
                placeholder="Entrer le Nom"
                errors={errors.name}
                labelTextError="Ce champ est requis."
              />
            </View>
          </Card.Content>
        </Card>

        <Card style={{marginTop: 20}}>
          <Card.Content>
            <View style={styles.settingsFormGroup}>
              <View style={styles.settingsFormLabel}>
                <Text>Prénom*</Text>
              </View>
              <InputField
                control={control}
                name="firstName"
                rules={{ required: true }}
                placeholder="Entrer le prénom"
                errors={errors.firstName}
                labelTextError="Ce champ est requis."
              />
            </View>
          </Card.Content>
        </Card>

        <View
          style={styles.settingsFormButton}
        >
          <Button
            loading={isLoading}
            disabled={isLoading}
            color={variableStyle.secondaryColor}
            labelStyle={{color: 'white'}}
            mode="contained"
            onPress={handleSubmit(onSubmit)}
          >
            Enregistrer
          </Button>
        </View>
      </View>

    </View>
  );
}

export default Settings;

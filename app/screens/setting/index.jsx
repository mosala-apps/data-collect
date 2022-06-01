import {
  Image, Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, login } from '../../store';
import { styles } from './index.style';
import logo from '../../../assets/img/logo_parteners.png';
import InputField from '../../components/inputField/InputField';

function Settings({ navigation }) {
  const dispatch = useDispatch();
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    isLoading, isAuthenticated, authError,
  } = useSelector(authSelector);

  const redirectToHomeScreen = () => {
    if (isAuthenticated) {
      navigation.push('Home');
      reset();
    }
  };
  const onSubmit = async (data) => {
    dispatch(login(data));
    redirectToHomeScreen();
  };
  useEffect(() => {
    // redirectToHomeScreen();
  }, [isAuthenticated]);
  return (
    <View style={styles.settingsContainer}>
      <View
        style={styles.settingsFormBody}>
        <Text style={styles.settingsFormTitle}>Parametres</Text>
        <View style={styles.settingsFormGroup}>
          <View style={styles.settingsFormLabel}>
            <Text>Nom</Text>
            <Text style={styles.settingsTextError}>*</Text>
          </View>
          <InputField
            control={control}
            name="agentName"
            rules={{ required: true }}
            placeholder="Entrer le Nom"
          />
          {errors.agentName && <Text style={styles.settingsTextError}>Ce champ est requis.</Text>}
        </View>
        <View style={styles.settingsFormGroup}>
          <View style={styles.settingsFormLabel}>
            <Text>Prénom</Text>
            <Text style={styles.settingsTextError}>*</Text>
          </View>
          <InputField
            control={control}
            name="agentFistName"
            rules={{ required: true }}
            placeholder="Entrer le prénom"
          />
          {errors.agentFistName
            && <Text style={styles.settingsTextError}>Ce champ est requis.</Text>}
        </View>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <View
            style={styles.settingsFormButton}
          >
            <Text style={styles.settingsButtonText}>
              {isLoading ? 'En cours' : 'Enregistrer'}
            </Text>
            {isLoading && <ActivityIndicator />}
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Settings;

import {
  Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './index.style';

import InputField from '../../components/inputField/InputField';
import { hospitalManagerNamesSelector, addHospitalManagerNames } from '../../store';

function Settings({ navigation }) {
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
        <Text style={styles.settingsFormTitle}>
          Paramètres

        </Text>
        <View style={styles.settingsFormGroup}>
          <View style={styles.settingsFormLabel}>
            <Text>Nom</Text>
            <Text style={styles.settingsTextError}>*</Text>
          </View>
          <InputField
            control={control}
            name="name"
            rules={{ required: true }}
            placeholder="Entrer le Nom"
          />
          {errors.name && <Text style={styles.settingsTextError}>Ce champ est requis.</Text>}
        </View>
        <View style={styles.settingsFormGroup}>
          <View style={styles.settingsFormLabel}>
            <Text>Prénom</Text>
            <Text style={styles.settingsTextError}>*</Text>
          </View>
          <InputField
            control={control}
            name="firstName"
            rules={{ required: true }}
            placeholder="Entrer le prénom"
          />
          {errors.firstName
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

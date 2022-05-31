import {
  Image, Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSelector, login} from '../../../store';
import { styles } from './signin.style';
import logo from '../../../../assets/img/logo_parteners.png';
import InputField from '../../../components/inputField/InputField';

function Signin({ navigation }) {
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState(null);
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm();
  const {
    isLoading, isAuthenticated, authError,
  } = useSelector(authSelector);
 
  const checkIsAuthenticatedUser = async () => {
    setUserToken(await AsyncStorage.getItem('token_access'));
  };

  const redirectToHomeScreen = () => {
    if (isAuthenticated) {
      navigation.push('Home');
    }
  };
  const onSubmit = async (data) => {
    dispatch(login(data));
    checkIsAuthenticatedUser()
    redirectToHomeScreen()
    reset()
   
  };
  useEffect(() => {
    redirectToHomeScreen();
    checkIsAuthenticatedUser()
  }, [isAuthenticated]);
  return (
    <View style={styles.signinContainer}>
      {isAuthenticated}
      <Image source={logo} style={styles.signinLogo} />
      {authError
            && (
            <Text style={styles.signinTextError}>
              Mot de passe incorrecte ou Login ne correspondent à aucun utilisateur enregistré
            </Text>
            )}
      <Shadow
        distance={5}
        startColor="#00000010"
        containerViewStyle={{ marginVertical: 20 }}
        radius={8}
        style={styles.signinForm}
      >
        <View style={styles.signinFormHeader}>
          <Text style={styles.signinFormTitle}>Connexion</Text>
          <Text style={styles.signinFormText}>
            Entrez vos paramètres de connexion pour continuer
          </Text>
        </View>
        <View style={styles.signinFormBody}>
          <View style={styles.signinFormGroup}>
            <Text>EMAIL, UTILISATEUR OU  TELEPHONE</Text>
            <InputField
              control={control}
              name="email"
              rules={{ required: true }}
            />
            {errors.email && <Text style={styles.signinTextError}>Ce champ est requis.</Text>}
          </View>
          <View style={styles.signinFormGroup}>
            <View style={styles.signinFormLabel}>
              <Text>MOT DE PASSE</Text>
              <Text style={styles.signinForgotPassword}>Mot de passe oublié ?</Text>
            </View>
            <InputField
              control={control}
              name="password"
              rules={{ required: true }}
              secureTextEntry
            />
            {errors.password
            && <Text style={styles.signinTextError}>Le Mot de passe est requis.</Text>}
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View
              style={styles.signinFormButton}
            >
              <Text style={styles.signinButtonText}>
                {isLoading ? 'En cours' : 'Connexion'}
              </Text>
              {isLoading && <ActivityIndicator />}
            </View>
          </TouchableOpacity>
        </View>
      </Shadow>

    </View>
  );
}

export default Signin;

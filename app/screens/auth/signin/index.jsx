import {
  Image, Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNetInfo } from '@react-native-community/netinfo';
import { authSelector, login } from '../../../store';
import { styles } from './signin.style';
import logo from '../../../../assets/img/logo_parteners.png';
import InputField from '../../../components/inputField/InputField';
import OnlineStatus from '../../../components/onlineStatus';

function Signin({ navigation }) {
  const { isConnected } = useNetInfo();
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
    redirectToHomeScreen();
  }, [isAuthenticated]);
  return (
    <View style={styles.signinContainer}>
      <View style={isConnected ? styles.onlineStatusContainer : styles.offlineStatusContainer}>
        <OnlineStatus />
      </View>
      <Image source={logo} style={styles.signinLogo} />
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

        {authError
            && (
              <View style={styles.signinAlertError}>
                <Text style={styles.signinTextError}>
                  Mot de passe incorrecte ou Login ne correspondent à aucun utilisateur enregistré
                </Text>
              </View>
            )}

        <View style={styles.signinFormBody}>
          <View style={styles.signinFormGroup}>
            <Text>Email, Utilisateur ou Téléphone</Text>
            <InputField
              control={control}
              name="email"
              rules={{ required: true }}
              errors={errors.email}
              labelTextError="Ce champ est requis."
            />
          </View>
          <View style={styles.signinFormGroup}>
            <View style={styles.signinFormLabel}>
              <Text>Mot de passe</Text>
              <Text style={styles.signinForgotPassword}>Mot de passe oublié ?</Text>
            </View>
            <InputField
              control={control}
              name="password"
              rules={{ required: true }}
              secureTextEntry
              errors={errors.password}
              labelTextError="Le Mot de passe est requis."
            />
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

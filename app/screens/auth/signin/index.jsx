import {
  Image, Text, View, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, login } from '../../../store';
import { styles } from './signin.style';
import logo from '../../../../assets/img/logo_parteners.png';
import InputField from '../../../components/inputField/InputField';

function Signin({ navigation }) {
  const dispatch = useDispatch();
  const {
    control, handleSubmit, formState: { errors, isValid }, reset,
  } = useForm();
  const {
    user, isLoading, isAuthenticated, authError,
  } = useSelector(authSelector);

  const onSubmit = async (data) => {
    await dispatch(login(data));
  };
  const redirectToHomeScreen = () => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  };
  useEffect(() => {
    redirectToHomeScreen();
  }, [isAuthenticated]);
  return (
    <View style={styles.signin__container}>
      <Image source={logo} style={styles.signin__logo} />
      {authError
            && (
            <Text style={styles.signin__textError}>
              Mot de passe incorrecte ou Login ne correspondent à aucun utilisateur enregistré
            </Text>
            )}
      <Shadow
        distance={5}
        startColor="#00000010"
        containerViewStyle={{ marginVertical: 20 }}
        radius={8}
        style={styles.signin__form}
      >
        <View style={styles.signin__form_header}>
          <Text style={styles.signin__form_title}>Connexion</Text>
          <Text style={styles.signin__form_text}>
            Entrez vos paramètres de connexion pour continuer
          </Text>
        </View>
        <View style={styles.signin__form_body}>
          <View style={styles.signin__form_group}>
            <Text>EMAIL, UTILISATEUR OU  TELEPHONE</Text>
            <InputField
              control={control}
              name="email"
              rules={{ required: true }}
            />
            {errors.email && <Text style={styles.signin__textError}>Ce champ est requis.</Text>}
          </View>
          <View style={styles.signin__form_group}>
            <View style={styles.signin__form_label}>
              <Text>MOT DE PASSE</Text>
              <Text style={styles.signin__forgotPassword}>Mot de passe oublié ?</Text>
            </View>
            <InputField
              control={control}
              name="password"
              rules={{ required: true }}
              secureTextEntry
            />
            {errors.password
            && <Text style={styles.signin__textError}>Le Mot de passe est requis.</Text>}
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View
              style={styles.signin__form_button}
            >
              <Text style={styles.signin__button_text}>
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

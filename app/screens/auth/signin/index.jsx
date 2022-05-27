import {
  Image, Text, View, Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './signin.style';
import logo from '../../../../assets/img/logo_parteners.png';
import InputField from '../../../components/inputField/InputField';

function Signin({ navigation }) {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm();
  const user = useSelector((state)=>state.auth.user)
  const isAuthenticated= useSelector((state)=>state.auth.isAuthenticated)
  const handleSignin = (data) => {
    alert(JSON.stringify(data));
    // navigation.navigate('Home');
  };
  return (
    <View style={styles.signin__container}>
      <Image source={logo} style={styles.signin__logo} />
      <Text>{JSON.stringify(user)} {JSON.stringify(isAuthenticated)}</Text>
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
              name="username"
              rules={{ required: true }}
            />
            {errors.username && <Text style={styles.signin__textError}>Ce champ est requis.</Text>}
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
          <Pressable
            style={styles.signin__form_button}
            onPress={handleSubmit(handleSignin)}
          >
            <Text style={styles.signin__button_text}>Connexion</Text>
          </Pressable>
        </View>
      </Shadow>

    </View>
  );
}

export default Signin;

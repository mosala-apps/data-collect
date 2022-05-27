import {
  Image, Text, View, TextInput, Pressable, ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { styles } from './signin.style';
import logo from '../../../../assets/img/logo_parteners.png';

function Signin({ navigation }) {
  const [isPasswordReveal, setIsPasswordReveal] = useState(false);
  const handleRevealPassword =()=>{
    setIsPasswordReveal(true)
  }
  const handleSignin = (e) => {
    e.preventDefault();
    navigation.navigate('Home');
  };
  return (
    <View style={styles.signin__container}>
      <Image source={logo} style={styles.signin__logo} />
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
            <TextInput style={styles.signin__form_input} />
          </View>
          <View style={styles.signin__form_group}>
            <View style={styles.signin__form_label}>
              <Text>MOT DE PASSE</Text>
              <Text style={styles.signin__forgotPassword}>Mot de passe oublié ?</Text>
            </View>
            <TextInput
              style={styles.signin__form_input}
              secureTextEntry={isPasswordReveal}
              onFocus={handleRevealPassword}
            />
          </View>
          <Pressable style={styles.signin__form_button} onPress={handleSignin}>
            <Text style={styles.signin__button_text}>Connexion</Text>
          </Pressable>
        </View>
      </Shadow>

    </View>
  );
}

export default Signin;

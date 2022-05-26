import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './signin.style';

const Signin =({ navigation }) =>{
  return (
    <View style={styles.signin__container}>
      <Text>Connexion</Text>
    </View>
  );
}

export default Signin;

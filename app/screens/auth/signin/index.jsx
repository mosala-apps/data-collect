import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './signin.style';

const Signin =({ navigation }) =>{
  return (
    <View style={styles.signin__container}>
     <View style={styles.signin__form}>
       <View>
       <Text>Connexion</Text>
       <Text>Entrez vos paramètres de connexion pour continuer</Text>
       </View>
     </View>
    </View>
  );
}

export default Signin;

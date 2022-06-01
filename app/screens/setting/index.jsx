import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

function Settings({ navigation }) {
  const navigated =()=>{
    navigation.navigate('Home')
  }
  console.log('navigation ->',navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={navigated}>
        <Text>Parameter Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Settings;

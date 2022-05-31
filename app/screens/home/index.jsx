import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import { setUser } from '../../store';

function Home() {
  const [textInput, setTextInput] = React.useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const checkIsAuthenticatedUser = async () => {
    if (Object.keys(user).length === 0) {
      dispatch(setUser(JSON.parse(await AsyncStorage.getItem('user'))));
    }
  };
  React.useLayoutEffect(() => {
    checkIsAuthenticatedUser();
  }, []);
  return (
    <View style={styleSheet.container}>
      <HeaderNavigation />
      <View style={styleSheet.containerHome}>
        <View style={styleSheet.containerHomeSearch}>
          <Feather name="search" size={24} color="black" style={styleSheet.containerHomeSearchIcon} />
          <TextInput
            editable
            style={styleSheet.containerHomeSearchTextInput}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
            placeholder="Rechercher par formulaire"
          />
        </View>
        <View style={styleSheet.containerHomeForm}>
          <Text style={styleSheet.containerHomeFormTitle}>Mes formulaires</Text>
          <Text>{JSON.stringify(user)}</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import { setUser, getForms } from '../../store';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import CardHome from '../../components/card';

function Home() {
  const [textInput, setTextInput] = useState('');
  const [hospitalId, setHospitalId] = useState(null);
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);
  const user = useSelector((state) => state.auth.user);
  const checkIsAuthenticatedUser = async () => {
    if (Object.keys(user).length === 0) {
      dispatch(setUser(JSON.parse(await AsyncStorage.getItem('user'))));
    }
    setHospitalId(user.hospital.id);
  };
  useEffect(() => {
    checkIsAuthenticatedUser();
    if (hospitalId) {
      dispatch(getForms({ id: hospitalId }));
    }
  }, [hospitalId]);
  const regexSearch = new RegExp(textInput, 'i');
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
          <View style={styleSheet.containerHomeFormCard}>
            { forms && forms.forms
              ? forms.forms
                .filter((form) => form.title.match(regexSearch))
                .map((form) => (<CardHome key={form.id} title={form.title} />))
              : <Text>Vous n'avez acmes à aucun formulaire</Text>}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import { getForms } from '../../store';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import CardHome from '../../components/card';

function Home() {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);
  useEffect(() => {
    dispatch(getForms({ id: 1 }));
    console.log('forms ->', forms);
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
          <View style={styleSheet.containerHomeFormCard}>
            <CardHome title="formulaire" />
            <CardHome title="formulaire" />
            <CardHome title="formulaire" />
            <CardHome title="formulaire" />
            <View>
              <Text>{JSON.stringify(forms)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;

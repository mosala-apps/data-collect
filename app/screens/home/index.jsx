import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';

function Home() {
  const [textInput, setTextInput] = React.useState('');
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
        </View>
      </View>
    </View>
  );
}

export default Home;

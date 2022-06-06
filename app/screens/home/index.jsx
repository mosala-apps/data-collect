import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { setUser, getForms } from '../../store';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import CardHome from '../../components/card';

function Home({ navigation }) {
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

  const formsFiltered = useMemo(() => {
    const regexSearch = new RegExp(textInput, 'i');
    if (forms && forms.forms) {
      return forms.forms.filter((form) => form.title.match(regexSearch));
    }
    return [];
  }, [textInput]);

  const handlePressFormCard = (form) => {
    navigation.navigate('ShowForm', {id: form.id});
  };

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
            placeholder="Rechercher un formulaire"
          />
        </View>
        <View style={styleSheet.containerHomeForm}>
          <Text style={styleSheet.containerHomeFormTitle}>Mes formulaires</Text>
          <View style={styleSheet.containerHomeFormCard}>
            { forms && forms.forms && forms.forms.length > 0 && formsFiltered.length > 0
              && formsFiltered.map(
                (form) => (
                  <CardHome
                    key={form.id}
                    title={form.title}
                    payload={form}
                    onPress={handlePressFormCard}
                  />
                ),
              )}
            { forms && forms.forms && forms.forms.length > 0 && formsFiltered.length === 0
                && (
                <Text style={styleSheet.messageStateForm}>
                  Aucun formulaire ne correspond à votre recherche
                </Text>
                )}
            {
              (!forms || !forms.forms || forms.forms.length === 0)
                && (
                <Text style={styleSheet.messageStateForm}>
                  Vous n'avez accès à aucun formulaire
                </Text>
                )
            }
          </View>
        </View>
      </View>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;

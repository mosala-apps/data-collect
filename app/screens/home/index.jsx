/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import {
  SafeAreaView, Text, View, TextInput, FlatList, RefreshControl, ActivityIndicator,
} from 'react-native';
import { setUser, getForms } from '../../store';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import CardHome from '../../components/card';
import variableStyle from '../../config/variable.style';

function Home() {
  const [textInput, setTextInput] = useState('');
  const [hospitalId, setHospitalId] = useState(null);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const forms = useSelector((state) => state.form.forms);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.form.isLoading);
  const regexSearch = new RegExp(textInput, 'i');

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
  const onRefresh = () => {
    dispatch(getForms({ id: hospitalId }));
    setRefreshing(isLoading);
  };
  const renderforms = ({ item }) => (
    <CardHome key={item.id} title={item.title} recurrence={item.form_recurrence.name} />

  );
  const onFlatList = () => {
    if (forms.forms.length === 0) {
      return (
        <View>

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Vous n'avez accès à aucun formulaire
          </Text>

        </View>
      );
    }
    return (
      <FlatList
        numColumns={2}
        data={forms.forms ? forms.forms.filter((form) => form.title.match(regexSearch)) : []}
        renderItem={renderforms}
        refreshControl={<RefreshControl
          colors={[variableStyle.secondaryColor, variableStyle.tertiaryColor]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}
      />
    );
  };

  return (
    <SafeAreaView style={styleSheet.container}>
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
            {isLoading
              ? <ActivityIndicator size="large" />
              : <View>{onFlatList()}</View>}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import {
  SafeAreaView, Text, View, TextInput, FlatList, RefreshControl, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { getHospital } from '../../store';
import HeaderNavigation from '../../navigations/headerNavigation';
import styleSheet from './index.style';
import FormCard from '../../components/card/FormCard';
import variableStyle from '../../config/variable.style';

function Home({ navigation }) {
  /**
   * States
   */
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  /**
   * Store
   */
  const hospital = useSelector((state) => state.hospital.hospital);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.hospital.isLoading);

  /**
   * hooks
   */

  useEffect(() => {
    if (user && user.hospital && user.hospital.id) {
      dispatch(getHospital({ id: user.hospital.id }));
    }
  }, [user]);

  const formsFiltered = useMemo(() => {
    if (!textInput) {
      return hospital.forms || [];
    }
    const regexSearch = new RegExp(textInput, 'i');
    if (hospital && hospital.forms) {
      return hospital.forms.filter((form) => form.title.match(regexSearch));
    }
    return [];
  }, [textInput, hospital]);

  const onRefresh = () => {
    dispatch(getHospital({ id: user.hospital.id }));
    setRefreshing(isLoading);
  };
  const renderForms = ({ item }) => (
    <FormCard
      key={item.id}
      form={item}
      navigation={navigation}
    />
  );
  const onFlatList = () => {
    if (!hospital || !hospital.forms || hospital.forms.length === 0) {
      return (
        <View>
          <Text style={styleSheet.messageStateForm}>
            Vous n'avez accès à aucun formulaire
          </Text>
        </View>
      );
    }

    if (formsFiltered.length === 0) {
      return (
        <View>
          <Text style={styleSheet.messageStateForm}>
            Aucun formulaire ne correspond à votre recherche
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        numColumns={2}
        data={formsFiltered}
        renderItem={renderForms}
        refreshControl={(
          <RefreshControl
            colors={[variableStyle.secondaryColor, variableStyle.tertiaryColor]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
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
            placeholder="Rechercher un formulaire"
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

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;


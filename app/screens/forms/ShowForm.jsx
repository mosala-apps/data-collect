import React, { useState } from 'react';
import {
  Platform, Text, View, TouchableNativeFeedback,
} from 'react-native';
import { useSelector } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styleSheet from './ShowForm.style';

export default function ShowForm({ route, navigation }) {
  const { id } = route.params;
  /**
   * States
   */
  const [dateFilter, setDateFilter] = useState();

  /**
   * Store
   */
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === id);

  /**
   * Hooks
   */


  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View style={styleSheet.headerIconContainer}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Home')}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
            <View style={styleSheet.headerIconView}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styleSheet.headerFilterContainer}>
          <TextInput
            editable
            onChangeText={(text) => setDateFilter(text)}
            value={dateFilter}
            placeholder="Rechercher sur une plage de date"
          />
        </View>
      </View>
      <View style={styleSheet.bodyContainer}>
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <Text style={styleSheet.titleForm}>{ selectedForm.title }</Text>
          <Text>{ JSON.stringify(selectedForm.completed_forms) }</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

ShowForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

import React, { useState } from 'react';
import {
  Platform, Text, View, TouchableNativeFeedback, RefreshControl, FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styleSheet from './ShowForm.style';
import CompletedFormCard from '../../components/card/CompletedFormCard';
import variableStyle from '../../config/variable.style';
import { getHospital } from '../../store';

export default function ShowForm({ route, navigation }) {
  const { id } = route.params;
  /**
   * States
   */
  const [dateFilter, setDateFilter] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  /**
   * Store
   */
  const dispatch = useDispatch();
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === id);
  const isLoading = useSelector((state) => state.hospital.isLoading);


  /**
   * Actions
   */
  const onRefresh = () => {
    dispatch(getHospital({ id: hospital.id }));
    setRefreshing(isLoading);
  };

  const flatListRenderedItem = ({ item }) => (
    <CompletedFormCard
      completedForm={item}
      key={`completed-form-${item.id}`}
      showEditAction={false}
    />
  );

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
        <View style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>
          <Text style={styleSheet.titleForm}>{ selectedForm.title }</Text>
          <Text style={styleSheet.textMuted}>
            Résultats : { selectedForm.completed_forms.length }
          </Text>
        </View>
        <View>
          <FlatList
            style={{backgroundColor: 'white'}}
            numColumns={1}
            data={selectedForm.completed_forms}
            renderItem={flatListRenderedItem}
            refreshControl={(
              <RefreshControl
                colors={[variableStyle.secondaryColor, variableStyle.tertiaryColor]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            )}
          />
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

import React, { useState, useMemo } from 'react';
import {
  Platform, Text, View, TouchableNativeFeedback, RefreshControl, FlatList, TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import PropTypes from 'prop-types';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { AntDesign, Feather } from '@expo/vector-icons'; 

import styleSheet from './ShowForm.style';
import CompletedFormCard from '../../components/card/CompletedFormCard';
import variableStyle from '../../config/variable.style';
import { getHospital } from '../../store';
import { Fab } from 'native-base';
export default function ShowForm({ route, navigation }) {
  const { id } = route.params;
  /**
   * States
   */
  const [refreshing, setRefreshing] = React.useState(false);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  /**
   * Store
   */
  const dispatch = useDispatch();
  const hospital = useSelector((state) => state.hospital.hospital);
  const selectedForm = hospital.forms.find((form) => form.id === id);
  const isLoading = useSelector((state) => state.hospital.isLoading);

  /**
   * Memo
   */

  const maximumStartDate = useMemo(() => {
    return endDate ? new Date(endDate) : new Date();
  }, [endDate])

  const minimumEndDate = useMemo(() => {
    return startDate ? new Date(startDate) : new Date(2020, 0, 1);
  }, [startDate])

  const completedFormsFiltered = useMemo(() => {
    const startDateFormatted = startDate ? format(new Date(startDate), 'yyyy-MM-dd') : startDate
    const enDateFormatted = endDate ? format(new Date(endDate), 'yyyy-MM-dd') : endDate
    return selectedForm.completed_forms.filter(completedForm => {
      let verify = true
      if (startDateFormatted) {
        verify = verify && completedForm.last_update >= startDateFormatted
      }
      if (enDateFormatted) {
        verify = verify && completedForm.last_update <= enDateFormatted
      }
      return verify
    })
  }, [startDate, endDate])

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

  const toggleStartDatePicker = () => {
    setStartDatePickerVisibility(!isStartDatePickerVisible);
  };
  const toggleEndDatePicker = () => {
    setEndDatePickerVisibility(!isEndDatePickerVisible);
  };

  const handleConfirmStartDate = (date) => {
    toggleStartDatePicker();
    setStartDate(date);
  };

  const handleConfirmEndDate = (date) => {
    toggleEndDatePicker();
    setEndDate(date);
  };

  const clearFilter = () => {
    setEndDate(null);
    setStartDate(null);
  };

  const handleClickOnNewForm = () => {
    navigation.navigate('CreateForm');
  }

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
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={toggleStartDatePicker}>
              <Text style={styleSheet.filterDate}>
                {startDate ? format(new Date(startDate), 'dd/MM/yyyy') : 'Date de début'}
              </Text>
            </TouchableOpacity>
            <Feather name="arrow-right" size={15} color="white" style={{marginHorizontal: 10}} />
            <TouchableOpacity onPress={toggleEndDatePicker}>
              <Text style={styleSheet.filterDate}>
                {endDate ? format(new Date(endDate), 'dd/MM/yyyy') : 'Date de fin'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearFilter}>
              <AntDesign name="closecircleo" size={15} color="white" style={{marginLeft: 10}}/>
            </TouchableOpacity>
          </View>

          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            date={startDate || new Date()}
            minimumDate={new Date(2020, 0, 1)}
            maximumDate={maximumStartDate}
            mode="date"
            onConfirm={handleConfirmStartDate}
            onCancel={toggleStartDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            date={endDate || new Date()}
            minimumDate={minimumEndDate}
            maximumDate={new Date()}
            mode="date"
            onConfirm={handleConfirmEndDate}
            onCancel={toggleEndDatePicker}
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
            data={completedFormsFiltered}
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

      <Fab
        renderInPortal={false}
        colorScheme='blue'
        shadow={2}
        placement="bottom-right"
        size="sm"
        label="Nouvelle soumission"
        icon={<AntDesign name="plus" size={18} color="white" />}
        onPress={handleClickOnNewForm}
      />
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

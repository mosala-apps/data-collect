import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card,Paragraph,IconButton } from 'react-native-paper';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns';
import { setUser, notificationsHospital } from '../../store';
import styleSheet from './Notifications.style';


function Notifications({ navigation }) {
  const [hospitalId, setHospitalId] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [getDate, setDate] = useState(null);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.notifications);
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
      dispatch(notificationsHospital({ id: hospitalId }));
    }
  }, [hospitalId]);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirmDate = (date) => {
    toggleDatePicker();
    setDate(date);
  };
  return (
    <SafeAreaView style={styleSheet.container}>
      <View style={styleSheet.headerContainer}>
        <View>
          <IconButton
              icon="arrow-left"
              color="white"
              size={20}
              onPress={() => navigation.navigate('Home')}
            />
        </View>
        <View>
          <Text style={styleSheet.headerTitle}>Notifications</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={toggleDatePicker}>
          <Text style={styleSheet.filterDate}>
            {getDate ? format(new Date(getDate), 'dd/MM/yyyy') : }
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={getDate || new Date()}
        minimumDate={new Date(2020, 0, 1)}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={toggleDatePicker}
        />
      <View style={styleSheet.bodyContainer}>
      <ScrollView>
        <View>
          {
            notifications.length > 0 ?
            notifications.map((notification) => (
              <Card style={ styleSheet.container} key={notification.id}>
              <Card.Title  title={notification.title} />
              <Card.Content>
                <Paragraph>{notification.message}</Paragraph>
              </Card.Content>
            </Card>
            )):<Text>Vous n'avez aucune notification</Text>
          }
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Notifications;

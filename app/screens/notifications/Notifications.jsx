import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card,Paragraph,IconButton,Button,Divider } from 'react-native-paper';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons'; 
import getMinutes from 'date-fns/getMinutes'
import getHours from 'date-fns/getHours'
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

  const clearFilter = () =>{
    setDate(null);
  }

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
        <Button icon="calendar" style={styleSheet.filterDate} labelStyle={{color:'black'}}  mode="contained" onPress={toggleDatePicker}>
            {getDate ? format(new Date(getDate), 'dd/MM/yyyy'):'Sélectionner une Date'}
        </Button>
        <TouchableOpacity onPress={clearFilter}>
              <AntDesign name="closecircleo" size={15} color="white" style={styleSheet.clearButton}/>
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
            Object.keys(notifications)
            .filter((dateNotification)=>{
              return getDate ? dateNotification === format(new Date(getDate), 'yyyy-MM-dd') :true
            })
            .map((dateNotification) => (
              <View key={dateNotification}>
                <Divider style={styleSheet.dividerNotification}/>
                <Text style={styleSheet.titleNotification}>
                  {dateNotification == format(new Date(), 'yyyy-mm-dd') ? "Aujourd’hui" : dateNotification}
                </Text>
                {
                notifications[dateNotification].map((notification) => (
                  <Card
                    style={styleSheet.cardContainer}
                    key={notification.id}
                  >
                    <Card.Title title={notification.title} titleNumberOfLines={2}/>
                    <Card.Content>
                      <Paragraph>{notification.message}</Paragraph>
                      <Paragraph style={styleSheet.hourCard}>{getHours(new Date(notification.created_at))+':'+getMinutes(new Date(notification.created_at))}</Paragraph>
                    </Card.Content>
                  </Card>
                ))
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Notifications;

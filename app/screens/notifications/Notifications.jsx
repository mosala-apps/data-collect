import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card,Paragraph } from 'react-native-paper';
import { Text, View,ScrollView,SafeAreaView,TouchableNativeFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { setUser, notificationsHospital } from '../../store';
import styleSheet from './Notifications.style';


function Notifications({ navigation }) {
  const [hospitalId, setHospitalId] = useState(null);
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
  return (
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
  );
}

export default Notifications;

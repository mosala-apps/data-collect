import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback, View,Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { setUser, getNotificationNotRead,setNotificationNotRead } from '../../store';
import styleSheet from './index.style';


export default function HeaderNavigation() {
  const navigation = useNavigation();
  const [hospitalId, setHospitalId] = useState(null);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notificationNotRead.notificationNotReads);
  const user = useSelector((state) => state.auth.user);
  const checkIsAuthenticatedUser = async () => {
    if (Object.keys(user).length === 0) {
      dispatch(setUser(JSON.parse(await AsyncStorage.getItem('user'))));
    }
    setHospitalId(user.hospital.id);
  };
  useEffect(() => {
    console.log('notifications', notifications);
    checkIsAuthenticatedUser();
    if (hospitalId) {
      dispatch(getNotificationNotRead({ id: hospitalId }));
    }
  }, [hospitalId]);

  const goToPageNotification = () => {
    dispatch(setNotificationNotRead({ id: hospitalId }));
    navigation.navigate('Notifications');
    dispatch(getNotificationNotRead({ id: hospitalId }));
  }

  return (
    <View style={styleSheet.header}>
      <View>
        <TouchableWithoutFeedback
          onPress={() => navigation.toggleDrawer()}
          style={{ marginRight: '10%' }}
        >
          <View>
            <Feather size={24} name="menu" style={styleSheet.color} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styleSheet.headerNavigationRight}>
        <View style={{ marginRight: '15%' }}>
          <TouchableWithoutFeedback
            onPress={() => goToPageNotification()}
          >
            <View>
              <Ionicons
                name="ios-notifications-outline"
                style={styleSheet.color}
                size={24}
              />
              { notifications && notifications.length > 0 ?
                <Text style={styleSheet.notificationCount}>{notifications.length}</Text>:<Text style={styleSheet.notificationCount}>0</Text>
              }
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
            <View>
              <Ionicons
                name="settings-outline"
                size={24}
                style={styleSheet.color}
                color="black"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

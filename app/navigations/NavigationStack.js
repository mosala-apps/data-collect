import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/home/index';
import NotificationScreen from '../screens/notification/index';
import SettingScreen from '../screens/setting/index';
import SynchronizationFormScreen from '../screens/synchronizationForm/index';
import DraftScreen from '../screens/draft/index';
import ConflictHandlingScreen from '../screens/conflictHandling/index';
import PendingFormScreen from '../screens/pendingForm/index';
import SigninScreen from '../screens/auth/signin';

const Stack = createNativeStackNavigator();
const styleSheet = {
  headerStyle: {
    backgroundColor: '#6384EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
function NavigationStack() {
  const [userToken, setUserToken] = useState(null);
  const checkIsAuthenticatedUser = async () => {
    setUserToken(await AsyncStorage.getItem('token_access'));
  };
  useEffect(() => {
    checkIsAuthenticatedUser();
  }, [userToken]);
  return (
    <Stack.Navigator initialRouteName="Signin">
      {userToken == null ? (
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              title: 'My home',
              headerStyle: {
                backgroundColor: '#6384EA',
                alignItems: 'center',
                justifyContent: 'center',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={() => ({
              title: 'My notification',
              headerStyle: {
                backgroundColor: '#6384EA',
                alignItems: 'center',
                justifyContent: 'center',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name="Parameter"
            component={SettingScreen}
            options={() => ({
              title: 'My parameter',
              headerStyle: {
                backgroundColor: '#6384EA',
                alignItems: 'center',
                justifyContent: 'center',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />

        </>
      )}
    </Stack.Navigator>
  );
}

export default NavigationStack;

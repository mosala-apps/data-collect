import React, { useLayoutEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/home/index';
import NotificationScreen from '../screens/notification';
import SettingScreen from '../screens/setting';
import SynchronizationFormScreen from '../screens/synchronizationForm';
import DraftScreen from '../screens/draft';
import ConflictHandlingScreen from '../screens/conflictHandling';
import PendingFormScreen from '../screens/pendingForm';
import SigninScreen from '../screens/auth/signin';

const Stack = createNativeStackNavigator();
const headerStyleContainer = {
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
  useLayoutEffect(() => {
    checkIsAuthenticatedUser();
  }, [userToken]);
  return (
    <Stack.Navigator initialRouteName={userToken ? 'Home' : 'Signin'}>
      {userToken === null ? (
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              title: 'My home',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={() => ({
              title: 'Mes notifications',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={() => ({
              title: 'Mes paramètres',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
          <Stack.Screen
            name="SynchronizationForm"
            component={SynchronizationFormScreen}
            options={() => ({
              title: 'Formulaires synchronisés',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
          <Stack.Screen
            name="Draft"
            component={DraftScreen}
            options={() => ({
              title: 'Mes brouillons',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
          <Stack.Screen
            name="ConflictHandling"
            component={ConflictHandlingScreen}
            options={() => ({
              title: 'Gestion des conflicts',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
          <Stack.Screen
            name="PendingForm"
            component={PendingFormScreen}
            options={() => ({
              title: 'En attente',
              headerStyle: headerStyleContainer.headerStyle,
              headerTintColor: headerStyleContainer.headerTintColor,
              headerTitleStyle: headerStyleContainer.headerTitleStyle,
            })}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
export default NavigationStack;

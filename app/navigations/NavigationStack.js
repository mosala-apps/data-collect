import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/home/index';
import NotificationsScreen from '../screens/notifications/Notifications';
import SettingScreen from '../screens/setting';
import SynchronizedFormsScreen from '../screens/synchronizedForms/SynchronizedForm';
import DraftsScreen from '../screens/drafts/Drafts';
import ConflictsHandlingScreen from '../screens/conflictsHandling/ConflictsHandling';
import PendingFormsScreen from '../screens/pendingForms/PendingForms';
import FormShowScreen from '../screens/forms/ShowForm';
import SigninScreen from '../screens/auth/signin';
import CreateFormScreen from '../screens/forms/CreateForm';
import ResolveConflictFormScreen from '../screens/forms/ResolveConflictForm';

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
  useEffect(() => {
    checkIsAuthenticatedUser();
  }, [userToken]);
  return (
    <Stack.Navigator initialRouteName={userToken ? 'Home' : 'Signin'}>
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
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
          name="Notifications"
          component={NotificationsScreen}
          options={() => ({
            title: 'Mes notifications',
            headerStyle: headerStyleContainer.headerStyle,
            headerTintColor: headerStyleContainer.headerTintColor,
            headerTitleStyle: headerStyleContainer.headerTitleStyle,
            headerShown: false
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
          name="SynchronizedForms"
          component={SynchronizedFormsScreen}
          options={() => ({
            title: 'Formulaires synchronisés',
            headerStyle: headerStyleContainer.headerStyle,
            headerTintColor: headerStyleContainer.headerTintColor,
            headerTitleStyle: headerStyleContainer.headerTitleStyle,
          })}
        />
        <Stack.Screen
          name="Drafts"
          component={DraftsScreen}
          options={() => ({
            title: 'Mes brouillons',
            headerStyle: headerStyleContainer.headerStyle,
            headerTintColor: headerStyleContainer.headerTintColor,
            headerTitleStyle: headerStyleContainer.headerTitleStyle,
          })}
        />
        <Stack.Screen
          name="ConflictsHandling"
          component={ConflictsHandlingScreen}
          options={() => ({
            title: 'Gestion des conflicts',
            headerStyle: headerStyleContainer.headerStyle,
            headerTintColor: headerStyleContainer.headerTintColor,
            headerTitleStyle: headerStyleContainer.headerTitleStyle,
            headerShown: false
          })}
        />
        <Stack.Screen
          name="PendingForms"
          component={PendingFormsScreen}
          options={() => ({
            title: 'Formulaires en attente de synchronisation',
            headerStyle: headerStyleContainer.headerStyle,
            headerTintColor: headerStyleContainer.headerTintColor,
            headerTitleStyle: headerStyleContainer.headerTitleStyle,
          })}
        />
        <Stack.Screen
          name="ShowForm"
          component={FormShowScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateForm"
          component={CreateFormScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="ResolveConflictForm"
          component={ResolveConflictFormScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default NavigationStack;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: 'My home',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={() => ({
          title: 'Mes notifications',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={() => ({
          title: 'Mes paramètres',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="SynchronizationForm"
        component={SynchronizationFormScreen}
        options={() => ({
          title: 'Formulaires synchronisés',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="Draft"
        component={DraftScreen}
        options={() => ({
          title: 'Mes brouillons',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="ConflictHandling"
        component={ConflictHandlingScreen}
        options={() => ({
          title: 'Gestion des conflicts',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="PendingForm"
        component={PendingFormScreen}
        options={() => ({
          title: 'En attente',
          headerStyle: styleSheet.headerStyle,
          headerTintColor: styleSheet.headerTintColor,
          headerTitleStyle: styleSheet.headerTitleStyle,
        })}
      />
    </Stack.Navigator>
  );
}

export default NavigationStack;

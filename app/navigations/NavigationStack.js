import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home/index'
import NotificationScreen from '../screens/notification'
import ParameterScreen from '../screens/parameter'
import SynchronizationFormScreen from '../screens/synchronizationForm'
import DraftScreen from '../screens/draft'
import ConflictHandlingScreen from '../screens/conflictHandling'
import PendingFormScreen from '../screens/pendingForm'
import SigninScreen from '../screens/auth/signin'

const Stack = createNativeStackNavigator()
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
}
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
        name="Parameter"
        component={ParameterScreen}
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
    </Stack.Navigator>
  )
}

export default NavigationStack

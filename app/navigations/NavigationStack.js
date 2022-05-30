import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/home/index';
import NotificationScreen from '../screens/notification';
import ParameterScreen from '../screens/parameter';
import SigninScreen from '../screens/auth/signin';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userToken = AsyncStorage.getItem('userToken');
  return (
    <Stack.Navigator initialRouteName="Signin">
      {userToken == null && !isAuthenticated ? (
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
            component={ParameterScreen}
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

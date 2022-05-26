import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/Home';
import SigninScreen from "../screens/auth/signin"
const Stack = createNativeStackNavigator();

export function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Signin'>
      <Stack.Screen
      name='Signin'
      component={SigninScreen}
      options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
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
    
    </Stack.Navigator>
  );
}

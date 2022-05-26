import React from 'react'
import { createNativeStackNavigator} from "@react-navigation/native-stack"

const stack = createNativeStackNavigator ()

export const NavigationStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route })=>({
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
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
  )
}


import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/screens/Home'
import ResultScreen from './src/screens/Result'



export default () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        component={HomeScreen}
        name="Home"
        options={{
            headerShown: false
            }} />
      <Stack.Screen 
        component={ResultScreen}
        name="Result"
        options={{
            headerShown: false
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



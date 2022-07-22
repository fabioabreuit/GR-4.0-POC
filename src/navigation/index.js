import * as React from 'react'
import { colors } from '../utils/colors'
// Navigator
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import Login from '../screens/Login'
import Home from '../screens/Home'
import Register from '../screens/Register'
//Stacks
const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            title: false,
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.lightGrey
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

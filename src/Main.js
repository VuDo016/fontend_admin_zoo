import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

const stack = createNativeStackNavigator();

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
      <stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}
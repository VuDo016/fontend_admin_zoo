import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import TabBar from './components/TabBar';
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
        <stack.Screen name="TabBar" component={TabBar} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}
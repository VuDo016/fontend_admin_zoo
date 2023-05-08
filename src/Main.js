import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import TabBar from './components/TabBar';
import TicketManager from './screens/Other/Staff/TicketManager';
import EventManager from './screens/Other/Staff/EventManager';
import ProfileStaff from './screens/Other/Staff/ProfileStaff';

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
        <stack.Screen name="TicketManager" component={TicketManager} />
        <stack.Screen name="EventManager" component={EventManager} />
        <stack.Screen name="ProfileStaff" component={ProfileStaff} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}
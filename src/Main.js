import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import TabBar from './components/TabBar';
import TicketManager from './screens/Other/Staff/TicketManager';
import ProfileStaff from './screens/Other/Staff/ProfileStaff';
import ScanQRcode from './screens/Main/ScanQRcode';
import ChatWithCus from './screens/Other/Customer/ChatWithCus';
import TicketsPaidScreen from './screens/Other/Customer/TicketsPaidScreen';
import AnimalScreen from './screens/Other/Zoo/AnimalScreen';
import InfoAnimal from './screens/Other/Zoo/InfoAnimal';
import AddAnimal from './screens/Other/Zoo/AddAnimal';
import AddEvent from './screens/Other/Zoo/AddEvent';
import EventScreen from './screens/Other/Zoo/EventScreen';
import InfoEvent from './screens/Other/Zoo/InfoEvent';
import RegisterScreen from './screens/Other/Staff/RegisterScreen';

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
        <stack.Screen name="ProfileStaff" component={ProfileStaff} />
        <stack.Screen name="ScanQRcode" component={ScanQRcode} />
        <stack.Screen name="ChatWithCus" component={ChatWithCus} />
        <stack.Screen name="TicketsPaidScreen" component={TicketsPaidScreen} />
        <stack.Screen name="AnimalScreen" component={AnimalScreen} />
        <stack.Screen name="InfoAnimal" component={InfoAnimal} />
        <stack.Screen name="AddAnimal" component={AddAnimal} />
        <stack.Screen name="AddEvent" component={AddEvent} />
        <stack.Screen name="InfoEvent" component={InfoEvent} />
        <stack.Screen name="EventScreen" component={EventScreen} />
        <stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </stack.Navigator>
    </NavigationContainer>
    )
  }
}
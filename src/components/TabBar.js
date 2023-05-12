import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/TabBarStyles';
import colors from '../../assets/colors/colors';
import Ticket from '../screens/Main/Ticket';
import Home from '../screens/Main/Home';

function Screen1({ navigation }) {
  return (
    <View>
      <Home navigation={navigation} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View>
      <Ticket navigation={navigation} />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View>
      <Ticket navigation={navigation} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class TabBar extends Component {
  render() {
    const navigation = this.props.navigation

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: '10%', borderTopWidth: 2, borderTopColor: colors.mainHome }
        }}
      >
        <Tab.Screen
          name="Event"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/Main/main.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Trang chủ
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen1} />
        <Tab.Screen
          name="Ticket"
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={styles(focused).tabBarIcon1} onPress={() => navigation.navigate('ScanQRcode')}>
                <Image
                  source={require('../../assets/images/Main/qrcode.png')}
                  resizeMode='contain'
                  style={styles(focused).icon1}
                />
              </TouchableOpacity>
            ),
            headerShown: false
          }}
          component={Screen3} />
        <Tab.Screen
          name="Animal"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles(focused).tabBarIcon}>
                <Image
                  source={require('../../assets/images/Main/ticket.png')}
                  resizeMode='contain'
                  style={styles(focused).icon}
                />
                <Text style={styles(focused).text}>
                  Thống kê
                </Text>
              </View>
            ),
            headerShown: false
          }}
          component={Screen2} />
      </Tab.Navigator>
    );
  }
}
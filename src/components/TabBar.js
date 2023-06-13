import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import styles from '../styles/TabBarStyles';
import colors from '../../assets/colors/colors';
import Ticket from '../screens/Main/Ticket';
import Home from '../screens/Main/Home';
import { getAccessTokenNew } from '../../api/service/account';

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
  componentDidMount() {
    this.refreshTokenInterval = setInterval(this.checkAccessTokenExpiration, 32 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTokenInterval);
  }

  checkAccessTokenExpiration = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);

    if (this.isAccessTokenExpired(cartData.accessToken)) {
      const tokenNew = await getAccessTokenNew(cartData.refreshToken)
      try {
        await AsyncStorage.setItem('token', JSON.stringify(tokenNew));
        console.log('Token đã được lưu vào AsyncStorage.');
      } catch (error) {
        console.log('Lỗi khi lưu token vào AsyncStorage:', error);
      }
    }
  };

  isAccessTokenExpired = (accessToken) => {
    if (!accessToken) {
      return true;
    }

    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken.exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;

    return decodedToken.exp <= currentTime;
  };

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
                <View style={styles(focused).tabBarIcon2}>
                  <Image
                    source={require('../../assets/images/Main/qrcode.png')}
                    resizeMode='contain'
                    style={styles(focused).icon1}
                  />
                </View>
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
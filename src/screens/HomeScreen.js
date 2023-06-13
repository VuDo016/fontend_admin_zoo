import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/HomeStyles';
import colors from '../../assets/colors/colors';
import { handle_SignIn_SignUp_KH } from '../../api/method/post';

export default class HomeScreen extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  async checkLoginKhachHang(navigation) {
    try {
      const data = await handle_SignIn_SignUp_KH(this.state.email, this.state.password, '', 1)
      if (data[0].tokens.length !== 0) {
        AsyncStorage.setItem('token', JSON.stringify(data[0].tokens))
        AsyncStorage.setItem('user', JSON.stringify(data[0].userId))
        AsyncStorage.setItem('role', JSON.stringify(data[0].role))

        navigation.navigate('TabBar')
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { email, password } = this.state;
    const navigation = this.props.navigation

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewMid}>
            <View>
              <View style={styles.backButton} onPress={() => navigation.goBack()}>
              </View>
              <Text style={styles.textTitle}>Đăng nhập</Text>
              <Text style={styles.textTitle1}>Nhân viên sở thú</Text>
            </View>
            <Image style={styles.imageLogo} source={require('../../assets/images/logo.png')} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nhập Email của bạn"
            placeholderTextColor={colors.mainDark}
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu của bạn"
            placeholderTextColor={colors.mainDark}
            secureTextEntry
            value={password}
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.checkLoginKhachHang(navigation)}>
            <Text style={styles.buttonText} >Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
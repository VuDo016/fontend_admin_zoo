import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import styles from '../styles/HomeStyles';
import colors from '../../assets/colors/colors';

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

  handleLoginPress = () => {
    const { email, password } = this.state;

    // You can perform authentication here and navigate to the main app screen
  };

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
          <TouchableOpacity style={styles.button} onPress={this.handleLoginPress}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('TabBar')}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
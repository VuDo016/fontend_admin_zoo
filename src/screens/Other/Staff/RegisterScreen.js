import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import styles from '../../../styles/LoginStyles';
import colors from '../../../../assets/colors/colors';
import { handle_SignIn_SignUp_KH } from '../../../../api/method/post';

export default class RegisterScreen extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    rePassword: ''
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handlerePasswordChange = (rePassword) => {
    this.setState({ rePassword });
  };

  async register(navigation) {
    try {
      if (this.state.password === this.state.rePassword) {
        const data = await handle_SignIn_SignUp_KH(this.state.email, this.state.password, this.state.name, 2)
        if (data.length !== 0) {
          const newUser = {
            email: this.state.email,
            password: this.state.password
          }
          navigation.navigate('TabBar', { newUser: newUser })
        }
      }
      else
        alert('Mật khẩu nhập lại không trùng khớp !')
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { email, password, name, rePassword } = this.state;
    const navigation = this.props.navigation

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewMid}>
            <View>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image style={styles.backButtonIcon} source={require('../../../../assets/images/IconBack.png')} />
              </TouchableOpacity>
              <Text style={styles.textTitle}>Đăng ký</Text>
              <Text style={styles.textTitle1}>Tạo tài khoản</Text>
            </View>
            <Image style={styles.imageLogo} source={require('../../../../assets/images/logo.png')} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nhập Họ tên đầy đủ của nhân viên"
            placeholderTextColor={colors.mainDark}
            value={name}
            onChangeText={this.handleNameChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập Email của nhân viên"
            placeholderTextColor={colors.mainDark}
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Tạo một mật khẩu có ít nhất 8 ký tự"
            placeholderTextColor={colors.mainDark}
            secureTextEntry
            value={password}
            onChangeText={this.handlePasswordChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={colors.mainDark}
            secureTextEntry
            value={rePassword}
            onChangeText={this.handlerePasswordChange}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.register(navigation)}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
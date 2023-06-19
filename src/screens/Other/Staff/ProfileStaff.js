import { Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, LogBox } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/InforUserStyle';

export default class ProfileStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  refreshData() {
    this.setState({ data: this.props.route.params.data })
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.refreshData()
      LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);
    });
  }

  render() {
    const { data } = this.state

    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
            <Image
              style={styles.iconArrow}
              source={require('../../../../assets/images/IconBack.png')}
            />
            <Text style={styles.textTitle}>Hồ sơ của tôi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEdit} onPress={() => this.props.navigation.navigate('EditUser', { data: data })}>
            <Image
              style={styles.iconEdit}
              source={require('../../../../assets/images/manager/editProfile.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.info}>
            <ImageBackground style={styles.imageCover} source={require('../../../../assets/images/splash_bg.jpg')}>
              {data.avatar_url ? (<Image
                style={styles.imageAvatar}
                source={{ uri: data.avatar_url }}
              />
              ) : <Image
                style={styles.imageAvatar}
                source={require('../../../../assets/images/avatar/avatar.png')}
              />}
            </ImageBackground>
            <View style={styles.viewChoose}>
              <Text style={styles.textTitleInfo}>Họ</Text>
              <Text style={styles.textClick}>{data.first_name}  </Text>
            </View>
            <View style={styles.viewChoose}>
              <Text style={styles.textTitleInfo}>Tên</Text>
              <Text style={styles.textClick}>{data.name}  </Text>
            </View>
            <View style={styles.viewChoose1}>
              <Text style={styles.textTitleInfo}>Giới tính</Text>
              {
                data.gender !== null ? (data.gender ? <Text style={styles.textClick}>Nam  </Text> : <Text style={styles.textClick}>Nữ  </Text>) : <Text style={styles.textClick}> </Text>
              }

            </View>
            <View style={styles.viewChoose}>
              <Text style={styles.textTitleInfo}>Ngày sinh</Text>
              {
                data.birth_date !== null ? <Text style={styles.textClick}>{formatDate(new Date(data.birth_date))}  </Text> : <Text style={styles.textClick}> </Text>
              }
            </View>
            <View style={styles.viewChoose}>
              <Text style={styles.textTitleInfo}>Địa chỉ</Text>
              <Text style={styles.textClick}>{data.address}  </Text>
            </View>
            <View style={styles.viewChoose1}>
              <Text style={styles.textTitleInfo}>Số điện thoại</Text>
              <Text style={styles.textClick}>{data.phone}  </Text>
            </View>
            <View style={styles.viewChoose}>
              <Text style={styles.textTitleInfo}>Email</Text>
              <Text style={styles.textClick}>{data.email}  </Text>
            </View>
            <TouchableOpacity style={styles.viewChangePass} onPress={() => this.props.navigation.navigate('ChangePass', { idKH: data.id })}>
              <Text style={styles.textChangePass}>Đổi mật khẩu</Text>
              <Text style={styles.textChangePass}>➤</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
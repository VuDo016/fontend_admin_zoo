import { Text, View, TouchableOpacity, FlatList, RefreshControl, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import { getAllAccountByRoll, searchAccount } from '../../../../api/service/account';
import TabBack from '../../../components/TabBack';

export default class ManagerStaff extends Component {
  state = {
    data: [],
    isLoading: true,
    refreshing: false
  };

  refreshData() {
    this.setState({ refreshing: true });

    // Gọi lại hàm getAllAnimal để lấy dữ liệu sự kiện ban đầu
    this.getAllData().then(() => {
      this.setState({ refreshing: false });
    });
  }

  async getAllData() {
    try {
      this.setState({ data: await getAllAccountByRoll('STAFF') })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async setValue(text) {
    this.setState({ data: await searchAccount('STAFF', text) })
  }

  componentDidMount() {
    this.getAllData();
  }

  render() {
    const { data } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(data).length;

    return (
      <View style={styles.container}>
        <TabBack navigation={navigation} title={'quản lý nhân viên'} />
        <View style={styles.viewRow}>
          <Text style={styles.textNumber}>{size} Nhân viên</Text>
          <TextInput style={styles.viewSelecInput} placeholder='Nhập để tìm kiếm ' onChangeText={text => this.setValue(text, 1)} />
        </View>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          style={styles.listAllAnimal}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refreshData()}
            />
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('InfoProfile', { data: item, title: 'nhân viên' })}>
              <Text style={styles.textName1}>#{item.id}</Text>

              <Image style={styles.image} source={ item.avatar_url ? { uri: item.avatar_url } : require('../../../../assets/images/avatar/avatar.png') } />
              <Text style={styles.textName1}>{item.name} {item.first_name}</Text>
              <Image style={styles.image1} source={require('../../../../assets/images/arrowRight.png')} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
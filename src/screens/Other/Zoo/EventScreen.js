import { Text, View, TouchableOpacity, FlatList, RefreshControl, Image } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import { getAllEvent, getEventByDate } from '../../../../api/service/event';
import TabBack from '../../../components/TabBack';
import DateChoice from '../../../components/DateChoice';

export default class EventScreen extends Component {
  state = {
    event: [],
    isLoading: true,
    refreshing: false
  };

  refreshData() {
    this.setState({ refreshing: true });

    // Gọi lại hàm getAllAnimal để lấy dữ liệu sự kiện ban đầu
    this.getAllEvent().then(() => {
      this.setState({ refreshing: false });
    });
  }

  async getAllEvent() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxMTYzMDIsImV4cCI6MTY4NjEyNzEwMn0.baFZYgMbd9Ioupkxby-dnFT2oZW8tMD97P3_V4Io4YU'
    try {
      this.setState({ event: await getAllEvent(token) })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getAllEvent();
  }

  handleDateChange = async (date) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxMTYzMDIsImV4cCI6MTY4NjEyNzEwMn0.baFZYgMbd9Ioupkxby-dnFT2oZW8tMD97P3_V4Io4YU'
    this.setState({ event: await getEventByDate(date, token) })
  }

  render() {
    const { event } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(event).length;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddEvent')}>
          <Text style={styles.textbtnAdd}>+</Text>
        </TouchableOpacity>
        <TabBack navigation={navigation} title={'quản lý sự kiện'} />
        <View style={styles.viewRow}>
          <Text style={styles.textNumber}>{size} Sự kiện</Text>
          <DateChoice onDateChange={this.handleDateChange} />
        </View>
        <FlatList
          data={event}
          keyExtractor={({ id }, index) => id}
          style={styles.listAllAnimal}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refreshData()}
            />
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('InfoEvent', { data: item })}>
              <Text style={styles.textName1}>#{item.id}</Text>
              <Image style={styles.image} source={{ uri: item.image_url }} />
              <Text style={styles.textName1}>{item.name}</Text>
              <Image style={styles.image1} source={require('../../../../assets/images/arrowRight.png')} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
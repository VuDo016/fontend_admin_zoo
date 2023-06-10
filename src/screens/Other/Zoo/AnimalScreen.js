import { Text, View, TouchableOpacity, FlatList, RefreshControl, Image } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import Dropdown from '../../../components/Dropdown';
import { getAllAnimal, getAnimalBySpecies } from '../../../../api/service/animal';
import TabBack from '../../../components/TabBack';

export default class AnimalScreen extends Component {
  state = {
    animal: [],
    isLoading: true,
    selectedDropdownValue: '',
    refreshing: false
  };

  refreshData() {
    this.setState({ refreshing: true });

    // Gọi lại hàm getAllAnimal để lấy dữ liệu sự kiện ban đầu
    this.getAllAnimal().then(() => {
      this.setState({ refreshing: false });
    });
  }

  async getAllAnimal() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYwNTIyNTgsImV4cCI6MTY4NjA1NTg1OH0.afWk0lzQfNS-BeHOmvKeFlr6sMMy9t6HKQy8Uo9iV3g'
    try {
      this.setState({ animal: await getAllAnimal(token) })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  setSelectedDropdownValue = async (value) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYwNTIyNTgsImV4cCI6MTY4NjA1NTg1OH0.afWk0lzQfNS-BeHOmvKeFlr6sMMy9t6HKQy8Uo9iV3g'
    this.setState({ selectedDropdownValue: value });
    this.setState({ animal: await getAnimalBySpecies(value, token) });
  }

  componentDidMount() {
    this.getAllAnimal();
  }

  render() {
    const { animal, selectedDropdownValue } = this.state;
    const navigation = this.props.navigation
    const size = Object.keys(animal).length;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddAnimal')}>
          <Text style={styles.textbtnAdd}>+</Text>
        </TouchableOpacity>
        <TabBack navigation={navigation} title={'quản lý động vật'} />
        <View style={styles.viewRow}>
          <Text style={styles.textNumber}>{size} Động Vật</Text>
          <View style={styles.viewSelec}>
            <Dropdown
              size={'100%'}
              title={'Loại động vật'}
              selectedValue={selectedDropdownValue}
              setSelectedValue={this.setSelectedDropdownValue}
            />
          </View>
        </View>
        <FlatList
          data={animal}
          keyExtractor={({ id }, index) => id}
          style={styles.listAllAnimal}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refreshData()}
            />
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('InfoAnimal', { data: item })}>
              <Text style={styles.textName1}>#{item.id}</Text>
              <Image style={styles.image} source={{ uri: item.images[0] }} />
              <Text style={styles.textName1}>{item.name}</Text>
              <Image style={styles.image1} source={require('../../../../assets/images/arrowRight.png')} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
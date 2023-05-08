import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/ComponentStyles'

export default class TabBack extends Component {
  render() {
    const navigation = this.props.navigation
    const title = this.props.title;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Image style={styles.imageBack} source={require('../../assets/images/IconBack.png')} />
        </TouchableOpacity> 
        <Text style={styles.textFoot}>Trang {title}</Text>     
      </View>
    )
  }
}
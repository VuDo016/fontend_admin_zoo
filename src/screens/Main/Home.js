import { Text, View, Image, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/HomeLast'

export default class Home extends Component {
  render() {
    const info = [
      { id: '1', title: 'Khách hàng', number: 100, icon: require('../../../assets/images/Ticket/customer.png'), isVolatility: true, volatility: 16 },
      { id: '2', title: 'Doanh thu', number: '10.000k', icon: require('../../../assets/images/Ticket/revenue.png'), isVolatility: false, volatility: -16 },
      { id: '3', title: 'Hóa đơn', number: 20, icon: require('../../../assets/images/Ticket/bill.png'), isVolatility: true, volatility: 10 },
      { id: '4', title: 'Vé', number: 50, icon: require('../../../assets/images/Ticket/ticket.png'), isVolatility: false, volatility: -5 }
    ]

    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.viewFlat}
        ListHeaderComponent={
          <View style={styles.viewheader}>
            <Image style={styles.imageHead} source={require('../../../assets/images/home.png')} />
            <View style={styles.viewTitle}>
              <Text style={styles.textHead1}>TRANG QUẢN LÝ</Text>
            </View>
            <View style={styles.viewTime}>
              <Image style={styles.iconClock} source={require('../../../assets/images/clock.png')} />
              <Text style={styles.textHead}>Mở cửa đến 5h chiều</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View>

          </View>
        )}
        ListFooterComponent={
          <View>

          </View>
        }
      />
    )
  }
}
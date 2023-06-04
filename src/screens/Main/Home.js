import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from '../../styles/HomeLast'

export default class Home extends Component {
  render() {
    const navigation = this.props.navigation

    const info = [
      { id: '1', title: 'Động vật', icon: require('../../../assets/images/manager/animal.png') },
      { id: '2', title: 'Thực vật', icon: require('../../../assets/images/manager/plant.png') },
      { id: '3', title: 'sản phẩm', icon: require('../../../assets/images/manager/shop.png') },
      { id: '4', title: 'Thực đơn', icon: require('../../../assets/images/manager/food.png') }
    ]

    const customer = [
      { id: '1', title: 'Tài khoản khách hàng', icon: require('../../../assets/images/Main/account.png'), screen: 'ChatWithCus' },
      { id: '2', title: 'Bình luận từ khách hàng', icon: require('../../../assets/images/Main/comment.png'), screen: 'ChatWithCus' },
      { id: '3', title: 'Hỗ trợ khách hàng', icon: require('../../../assets/images/Main/support.png'), screen: 'ChatWithCus' },
      { id: '4', title: 'Quỹ quyên góp', icon: require('../../../assets/images/Main/donation.png'), screen: 'ChatWithCus' }
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
            <View style={styles.viewStaff}>
              <TouchableOpacity style={styles.viewItemStaff} onPress={() => navigation.navigate('TicketManager', { title: 'quản lý đặt vé'  })}>
                <Image style={styles.imgStaff} source={require('../../../assets/images/Main/ticketHis.png')} />
                <Text style={styles.textItemStaff}>Quản lý đặt vé</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewItemStaff} onPress={() => navigation.navigate('EventManager', { title: 'quản lý sự kiện'  })}>
                <Image style={styles.imgStaff} source={require('../../../assets/images/Main/schedule.png')} />
                <Text style={styles.textItemStaff}>Quản lý sự kiện</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewItemStaff} onPress={() => navigation.navigate('ProfileStaff', { title: 'thông tin nhân viên'  })}>
                <Image style={styles.imgStaff} source={require('../../../assets/images/Main/man.png')} />
                <Text style={styles.textItemStaff}>Thông tin cá nhân</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textTitleItem}>Quản lý chung</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.viewItem} key={item.id}>
            <Image style={styles.imageItem} source={item.icon} />
            <View style={styles.viewInfoItem}>
              <Text style={styles.textItem}>{item.title}</Text>
              <View style={styles.viewIncon}>
                <Image style={styles.iconItem} source={require('../../../assets/images/arrowRight.png')} />
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={styles.containerFoot}>
            <Text style={styles.textTitleItem}>Khách hàng </Text>
            {
              customer.map((item) => (
                <TouchableOpacity style={styles.viewFoot} key={item.id} onPress={() => navigation.navigate(item.screen)}>
                  <Image style={styles.imgFoot} source={item.icon} />
                  <Text style={styles.textFoot}>{item.title}</Text>
                  <Image style={styles.arrowFoot} source={require('../../../assets/images/arrowRight.png')}/>
                </TouchableOpacity>
              ))
            }
          </View>
        }
      />
    )
  }
}
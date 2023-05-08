import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'

import TabBack from '../../../components/TabBack'
import styles from '../../../styles/Ticket'
import PaginationExample from '../../../components/PaginationExample'

export default class TicketManager extends Component {
  render() {
    const navigation = this.props.navigation
    const title = this.props.route.params.title;
    const info = [
      { id: '1', avatar: require('../../../../assets/images/avatar/bear.png'), name: 'Vũ Đỗ', dateCreate: '20-12-2023', numTicket: 3, numService: 4, price: 500, status: 0 },
      { id: '2', avatar: require('../../../../assets/images/avatar/fox.png'), name: 'Nam Nguyễn', dateCreate: '20-12-2023', numTicket: 6, numService: 9, price: 1000, status: 2 },
      { id: '3', avatar: require('../../../../assets/images/avatar/frog.png'), name: 'Kely Trần', dateCreate: '20-12-2023', numTicket: 7, numService: 0, price: 800, status: 1 },
      { id: '4', avatar: require('../../../../assets/images/avatar/panda.png'), name: 'Mai Dora', dateCreate: '20-12-2023', numTicket: 9, numService: 9, price: 50, status: 0 },
      { id: '5', avatar: require('../../../../assets/images/avatar/bear.png'), name: 'Tính Ngô', dateCreate: '20-12-2023', numTicket: 7, numService: 4, price: 500, status: 1 },
    ]

    return (
      <View>
        <TabBack navigation={navigation} title={title} />
        <FlatList
          data={info}
          numColumns={2}
          keyExtractor={({ id }, index) => id}
          ListHeaderComponent={
            <View>
              <Text>VÉ CÒN HẠN</Text>
              <Text>Hôm Nay</Text>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.containerManager} key={item.id}>
              <View style={styles.itemManager}>
                <View style={styles.viewAvatarManager}>
                  <Image style={styles.avatarManager} source={item.avatar} />
                </View>
                <View style={styles.viewInfoHis}>
                  <Text numberOfLines={1} style={styles.textNameManager}>{item.name}</Text>
                  <View style={styles.viewRowManager}>
                    <View style={styles.viewRowManager1}>
                      <Image style={styles.iconManager} source={require('../../../../assets/images/Ticket/ticket.png')} />
                      <Text>{item.numTicket}</Text>
                    </View>
                    <View style={styles.viewRowManager1}>
                      <Image style={styles.iconManager1} source={require('../../../../assets/images/Ticket/rent.png')} />
                      <Text>{item.numTicket}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.itemManager1}>
                <Text style={styles.textPriceManager}>{item.price}k</Text>
                <Image style={styles.iconArrowManager} source={require('../../../../assets/images/arrowRight.png')} />
              </View>
              {
                item.status === 0 ? (
                  <Image style={styles.iconArrowManager1} source={require('../../../../assets/images/Ticket/tick.png')} />
                ) : item.status === 1 ? (
                  <FastImage
                    style={styles.iconArrowManager1}
                    source={require('../../../../assets/images/Ticket/loading.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                ) : (
                  <Image style={styles.iconArrowManager1} source={require('../../../../assets/images/Ticket/iconX.png')} />
                )
              }
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <View>
              <PaginationExample />
              <View>
                <Text>VÉ QUÁ HẠN</Text>
              </View>
              {
                info.map((item) => (
                  <TouchableOpacity style={styles.containerManager1} key={item.id}>
                    {
                      item.status === 0 ? (
                        <Image style={styles.iconArrowManager2} source={require('../../../../assets/images/Ticket/tick.png')} />
                      ) : item.status === 1 ? (
                        <FastImage
                          style={styles.iconArrowManager2}
                          source={require('../../../../assets/images/Ticket/loading.gif')}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                      ) : (
                        <Image style={styles.iconArrowManager2} source={require('../../../../assets/images/Ticket/iconX.png')} />
                      )
                    }
                    <View style={styles.viewAvatarManager1}>
                      <Image style={styles.avatarManager1} source={item.avatar} />
                    </View>
                    <View style={styles.viewTextManager1}>
                      <Text style={styles.textNameManager1}>{item.name}</Text>
                    </View>
                    <Text style={styles.textTitle}>{item.dateCreate}</Text>
                    <Text style={styles.textPriceManager1}>{item.price}k</Text>
                    <Image style={styles.iconArrowHis} source={require('../../../../assets/images/arrowRight.png')} />
                  </TouchableOpacity>
                ))
              }
              <PaginationExample />
              <PaginationExample />
            </View>
          }
        />
      </View>
    )
  }
}
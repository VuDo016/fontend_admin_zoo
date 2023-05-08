import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { LineChart } from "react-native-chart-kit";

import styles from '../../styles/Ticket'
import colors from '../../../assets/colors/colors'

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: ''
    };
  }

  componentDidMount() {
    this.getCurrentDate();
  }

  getCurrentDate() {
    const date = new Date().getDate(); // Lấy ngày
    const month = new Date().getMonth() + 1; // Lấy tháng (bắt đầu từ 0)
    const year = new Date().getFullYear(); // Lấy năm
    const hours = new Date().getHours(); // Lấy giờ
    const minutes = new Date().getMinutes(); // Lấy phút

    // Hiển thị ngày giờ dưới dạng chuỗi
    this.setState({
      currentDate:
        date + '/' + month + '/' + year + ' ' + hours + ':' + minutes
    });
  }

  render() {
    const { currentDate } = this.state;

    const info = [
      { id: '1', title: 'Khách hàng', number: 100, icon: require('../../../assets/images/Ticket/customer.png'), isVolatility: true, volatility: 16 },
      { id: '2', title: 'Doanh thu', number: '10.000k', icon: require('../../../assets/images/Ticket/revenue.png'), isVolatility: false, volatility: -16 },
      { id: '3', title: 'Hóa đơn', number: 20, icon: require('../../../assets/images/Ticket/bill.png'), isVolatility: true, volatility: 10 },
      { id: '4', title: 'Vé', number: 50, icon: require('../../../assets/images/Ticket/ticket.png'), isVolatility: false, volatility: -5 }
    ]

    const history = [
      { id: '1', avatar: require('../../../assets/images/avatar/bear.png'), name: 'Vũ Đỗ', dateCreate: currentDate, numTicket: 3, numService: 4, price: 500 },
      { id: '2', avatar: require('../../../assets/images/avatar/fox.png'), name: 'Nam Nguyễn', dateCreate: currentDate, numTicket: 6, numService: 9, price: 1000 },
      { id: '3', avatar: require('../../../assets/images/avatar/frog.png'), name: 'Kely Trần', dateCreate: currentDate, numTicket: 7, numService: 0, price: 800 },
      { id: '4', avatar: require('../../../assets/images/avatar/panda.png'), name: 'Mai Dora', dateCreate: currentDate, numTicket: 9, numService: 9, price: 50 },
      { id: '5', avatar: require('../../../assets/images/avatar/bear.png'), name: 'Tính Ngô', dateCreate: currentDate, numTicket: 7, numService: 4, price: 500 },
    ]

    return (
      <FlatList
        data={info}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        style={styles.viewFlat}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.textNumber}>Thống kê hàng tháng</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemHead}>
              <View style={styles.viewInfo}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textNumber}>{item.number}</Text>
              </View>
              <View style={styles.viewImage}>
                <Image style={styles.imageIcon} source={item.icon} />
              </View>
            </View>
            {
              item.isVolatility
                ?
                <View style={styles.viewVol}>
                  <Text style={[{ color: colors.red }, styles.textVol]}>↑</Text>
                  <Text style={[{ color: colors.red }, styles.textVol1]}> {item.volatility}%</Text>
                  <Text style={styles.textVol1}> so với tháng trước</Text>
                </View>
                :
                <View style={styles.viewVol}>
                  <Text style={[{ color: colors.mainHome }, styles.textVol]}>↓</Text>
                  <Text style={[{ color: colors.mainHome }, styles.textVol1]}> {item.volatility}%</Text>
                  <Text style={styles.textVol1}> so với tháng trước</Text>
                </View>
            }
          </View>
        )}
        ListFooterComponent={
          <View style={styles.viewFoot}>
            <Text style={styles.textTitleFoot}>Doanh thu trong năm</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <LineChart
                data={{
                  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10
                      ]
                    }
                  ]
                }}
                width={800} // from react-native
                height={250}
                yAxisLabel="đ"
                yAxisSuffix="tr"
                yAxisInterval={1} // optional, defaults to 1
                la
                chartConfig={{
                  backgroundColor: colors.text,
                  backgroundGradientFrom: 'green',
                  backgroundGradientTo: colors.phaneon,
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: colors.mainHome
                  }
                }}
                bezier
                style={{
                  borderRadius: 10
                }}
              />
            </ScrollView>
            <Text style={styles.textTitleFoot}>Hoá đơn gần nhất</Text>
            {
              history.map((item) => (
                <TouchableOpacity style={styles.containerHis} key={item.id}>
                  <View style={styles.viewAvatarHis}>
                    <Image style={styles.avatarHis} source={item.avatar} />
                  </View>
                  <View style={styles.viewInfoHis}>
                    <Text style={styles.textNameHis}>{item.name}</Text>
                    <Text style={styles.textTitle}>{item.dateCreate}</Text>
                    <View style={styles.viewRowHis}>
                      <View style={styles.viewRowHis1}>
                        <Image style={styles.iconHis} source={require('../../../assets/images/Ticket/ticket.png')} />
                        <Text>{item.numTicket}</Text>
                      </View>
                      <View style={styles.viewRowHis1}>
                        <Image style={styles.iconHis1} source={require('../../../assets/images/Ticket/rent.png')} />
                        <Text>{item.numTicket}</Text>
                      </View>
                    </View>
                  </View>
                    <Text style={styles.textPriceHis}>{item.price}k</Text>
                    <Image style={styles.iconArrowHis} source={require('../../../assets/images/arrowRight.png')} />
                </TouchableOpacity>
              ))
            }
          </View>
        }
      />
    )
  }
}
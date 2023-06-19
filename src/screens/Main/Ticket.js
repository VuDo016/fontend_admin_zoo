import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import { LineChart } from "react-native-chart-kit";

import styles from '../../styles/Ticket'
import colors from '../../../assets/colors/colors'

import { getBillTenLast, getDataChart, getStatistical } from '../../../api/service/ticket';

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: '',
      statistical: '',
      billTenLast: '',
      dataChart: '',
      isLoading: true
    };
  }

  componentDidMount() {
    this.getCurrentDate();
  }

  async getCurrentDate() {
    try {
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

      this.setState({ statistical: await getStatistical(), billTenLast: await getBillTenLast(), dataChart: await getDataChart() })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  formatData(data) {
    const formattedData = data.map((value) => {
      return (value / 1000000).toFixed(2);
    });
    return formattedData;
  }

  render() {
    const { currentDate, statistical, dataChart, billTenLast, isLoading } = this.state;
    const navigation = this.props.navigation;

    let info = []
    statistical ?
      info = [
        { id: '1', title: 'Khách hàng', number: statistical.customerCount, icon: require('../../../assets/images/Ticket/customer.png'), isVolatility: true, volatility: statistical.customerVolatility },
        { id: '2', title: 'Doanh thu', number: (statistical.totalRevenue / 1000000).toFixed(2) + 'tr', icon: require('../../../assets/images/Ticket/revenue.png'), isVolatility: false, volatility: statistical.revenueVolatility },
        { id: '3', title: 'Hóa đơn', number: statistical.billCount, icon: require('../../../assets/images/Ticket/bill.png'), isVolatility: true, volatility: statistical.billVolatility },
        { id: '4', title: 'Vé', number: statistical.ticketCount, icon: require('../../../assets/images/Ticket/ticket.png'), isVolatility: false, volatility: statistical.ticketVolatility }
      ]
      :
      info = [
        { id: '1', title: 'Khách hàng', number: 0, icon: require('../../../assets/images/Ticket/customer.png'), isVolatility: true, volatility: 0 },
        { id: '2', title: 'Doanh thu', number: 0, icon: require('../../../assets/images/Ticket/revenue.png'), isVolatility: false, volatility: 0 },
        { id: '3', title: 'Hóa đơn', number: 0, icon: require('../../../assets/images/Ticket/bill.png'), isVolatility: true, volatility: 0 },
        { id: '4', title: 'Vé', number: 0, icon: require('../../../assets/images/Ticket/ticket.png'), isVolatility: false, volatility: 0 }
      ]

    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
    };

    const calculateTimeAgo = (bill) => {
      const created_at = bill.created_at;
      const createdDate = new Date(created_at);
      const now = new Date();
      const timeDiff = now - createdDate;

      const minutesDiff = Math.floor(timeDiff / (1000 * 60));
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (minutesDiff < 60) {
        return minutesDiff + " phút trước";
      } else if (hoursDiff < 24) {
        return hoursDiff + " giờ trước";
      } else {
        return daysDiff + " ngày trước";
      }
    }

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
                  {
                    item.volatility === null ? <Text style={[{ color: colors.red }, styles.textVol1]}> 0%</Text>
                      : <Text style={[{ color: colors.red }, styles.textVol1]}> {item.volatility}%</Text>
                  }

                  <Text style={styles.textVol1}> so với tháng trước</Text>
                </View>
                :
                <View style={styles.viewVol}>
                  <Text style={[{ color: colors.mainHome }, styles.textVol]}>↓</Text>
                  {
                    item.volatility === null ? <Text style={[{ color: colors.mainHome }, styles.textVol1]}> 0%</Text>
                      : <Text style={[{ color: colors.mainHome }, styles.textVol1]}> {item.volatility}%</Text>
                  }
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
                      data: dataChart ? this.formatData(dataChart) : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                  ]
                }}
                width={800}
                height={250}
                yAxisLabel="đ"
                yAxisSuffix="tr"
                yAxisInterval={10}
                chartConfig={{
                  backgroundColor: colors.text,
                  backgroundGradientFrom: 'green',
                  backgroundGradientTo: colors.phaneon,
                  decimalPlaces: 0,
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
              isLoading ?
                <View style={styles.ViewLoading}>
                  <ActivityIndicator color={colors.mainHome} size={25} />
                  <Text style={styles.textName}>Đang tải dữ liệu</Text>
                </View> : (
                  billTenLast.map((item, index) => (
                    <TouchableOpacity style={styles.containerHis} key={index} onPress={() => navigation.navigate('TicketsPaidScreen', {data: item})}>
                      <View style={styles.viewAvatarHis}>
                        <Image style={styles.avatarHis} source={item.employer[0].avatar_url ? require('../../../assets/images/avatar/avatar.png') : { uri: item.employer[0].avatar_url }} />
                      </View>
                      <View style={styles.viewInfoHis}>
                        <Text style={styles.textNameHis}>{item.employer[0].name} {item.employer[0].first_name} </Text>
                        <Text style={styles.textTitle}>{formatDate(new Date(item.bill.visit_date))}</Text>
                        <View style={styles.viewRowHis}>
                          <View style={styles.viewRowHis1}>
                            <Image style={styles.iconHis} source={require('../../../assets/images/Ticket/ticket.png')} />
                            <Text>{item.tickets.length}</Text>
                          </View>
                          <View style={styles.viewRowHis1}>
                            <Image style={styles.iconHis1} source={require('../../../assets/images/Ticket/rent.png')} />
                            <Text>{item.services.length}</Text>
                          </View>
                        </View>
                      </View>
                      <Text style={styles.textPriceHis}>{(item.bill.total_price / 1000).toLocaleString().replace(',', '.')}k</Text>
                      <Text style={styles.textTimeAgo}>{calculateTimeAgo(item.bill)}</Text>
                      <Image style={styles.iconArrowHis} source={require('../../../assets/images/arrowRight.png')} />
                    </TouchableOpacity>
                  )))
            }
          </View>
        }
      />
    )
  }
}
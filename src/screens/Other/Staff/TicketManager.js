import { Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import FastImage from 'react-native-fast-image'

import TabBack from '../../../components/TabBack'
import styles from '../../../styles/Ticket'
import PaginationExample from '../../../components/PaginationExample'
import { getPageTicket, getPageTicketExpired, getNumberPage } from '../../../../api/service/ticket';
import colors from '../../../../assets/colors/colors'

export default class TicketManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTicket: '',
      pageTicketExpired: '',
      isLoading: true,
      numberPage: 0,
      numberPageEx: 0
    };
  }

  componentDidMount() {
    this.getDataPage();
  }

  async getDataPage() {
    try {
      this.setState({ pageTicket: await getPageTicket(1), pageTicketExpired: await getPageTicketExpired(1) })
      this.setState({ numberPage: await getNumberPage(false), numberPageEx: await getNumberPage(true) })
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async getDataPageOnChange(page, choice) {
    try {
      choice ?
        this.setState({ pageTicket: await getPageTicket(page) })
        :
        this.setState({ pageTicketExpired: await getPageTicketExpired(page) })

      this.setState({ currentPage: page });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { pageTicket, pageTicketExpired, isLoading, currentPage, numberPage, numberPageEx } = this.state;
    const navigation = this.props.navigation
    const title = this.props.route.params.title;

    const formatDate = (date) => {
      return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
    };

    return (
      <View>
        <TabBack navigation={navigation} title={title} />
        {
          isLoading ?
            <View style={styles.ViewLoading}>
              <ActivityIndicator color={colors.mainHome} size={25} />
              <Text style={styles.textName}>Đang tải dữ liệu</Text>
            </View> : (
              <FlatList
                data={pageTicket}
                numColumns={2}
                keyExtractor={({ id }, index) => index}
                ListHeaderComponent={
                  <View>
                    <Text>VÉ CÒN HẠN</Text>
                    <Text>{formatDate(new Date(pageTicket[0].bill.visit_date))}</Text>
                  </View>
                }
                renderItem={({ item, index }) => (
                  <TouchableOpacity style={styles.containerManager} key={index} onPress={() => navigation.navigate('TicketsPaidScreen', { data: item })}>
                    <View style={styles.itemManager}>
                      <View style={styles.viewAvatarManager}>
                        <Image style={styles.avatarManager} source={{ uri: item.employer[0].avatar_url }} />
                      </View>
                      <View style={styles.viewInfoHis}>
                        <Text numberOfLines={1} style={styles.textNameManager}>{item.employer[0].name} {item.employer[0].first_name}</Text>
                        <View style={styles.viewRowManager}>
                          <View style={styles.viewRowManager1}>
                            <Image style={styles.iconManager} source={require('../../../../assets/images/Ticket/ticket.png')} />
                            <Text>{item.tickets.length}</Text>
                          </View>
                          <View style={styles.viewRowManager1}>
                            <Image style={styles.iconManager1} source={require('../../../../assets/images/Ticket/rent.png')} />
                            <Text>{item.services.length}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.itemManager1}>
                      <Text style={styles.textPriceManager}>{(item.bill.total_price / 1000).toLocaleString().replace(',', '.')}k</Text>
                      <Image style={styles.iconArrowManager} source={require('../../../../assets/images/arrowRight.png')} />
                    </View>
                    {
                      item.bill.status === 1 ? (
                        <Image style={styles.iconArrowManager1} source={require('../../../../assets/images/Ticket/tick.png')} />
                      ) : item.bill.status === 0 ? (
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
                    <PaginationExample
                      totalPages={numberPage}
                      currentPage={currentPage} // Truyền giá trị currentPage cho component PaginationExample
                      onPageChange={(page) => this.getDataPageOnChange(page, true)} // Xử lý sự kiện khi thay đổi trang
                    />
                    <View>
                      <Text>VÉ QUÁ HẠN</Text>
                    </View>
                    {
                      pageTicketExpired.map((item, index) => (
                        <TouchableOpacity style={styles.containerManager1} key={index} onPress={() => navigation.navigate('TicketsPaidScreen', { data: item })}>
                          {
                            item.bill.status === 1 ? (
                              <Image style={styles.iconArrowManager2} source={require('../../../../assets/images/Ticket/tick.png')} />
                            ) : item.bill.status === 0 ? (
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
                            <Image style={styles.avatarManager1} source={{ uri: item.employer[0].avatar_url }} />
                          </View>
                          <View style={styles.viewTextManager1}>
                            <Text style={styles.textNameManager1}>{item.employer[0].name} {item.employer[0].first_name}</Text>
                          </View>
                          <Text style={styles.textTitle}>{formatDate(new Date(item.bill.visit_date))}</Text>
                          <Text style={styles.textPriceManager1}>{(item.bill.total_price / 1000).toLocaleString().replace(',', '.')}k</Text>
                          <Image style={styles.iconArrowHis} source={require('../../../../assets/images/arrowRight.png')} />
                        </TouchableOpacity>
                      ))
                    }
                    <PaginationExample
                      totalPages={numberPageEx}
                      currentPage={currentPage} // Truyền giá trị currentPage cho component PaginationExample
                      onPageChange={(page) => this.getDataPageOnChange(page, false)} // Xử lý sự kiện khi thay đổi trang
                    />
                    <View style={styles.containerFoot}></View>
                  </View>
                }
              />)}
      </View>
    )
  }
}
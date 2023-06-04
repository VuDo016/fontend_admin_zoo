import { Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/BuyTicketStyles'

export default class TicketsPaidScreen extends Component {
    state = {
        bill: [],
        ticket: [],
        service: [],
        user: [],
        more: false,
        isLoading: true
    };

    async getBillNew() {
        try {
            const data = this.props.route.params.data

            this.setState({ bill: data['bill'], ticket: data['tickets'] })
            this.setState({ service: data['services'], user: data.employer[0] })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    setMore(more) {
        this.setState({ more })
    }

    componentDidMount() {
        this.getBillNew();
    }

    formatDate(date) {
        const dateObject = new Date(date);
        const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
        return formattedDate
    }

    render() {
        const { bill, ticket, service, user, more } = this.state;
        const navigation = this.props.navigation;

        let listTicket = '';
        for (let i = 0; i <= ticket.length - 1; i++) {
            listTicket = listTicket + ticket[i].quantity + ' ' + ticket[i].ticket_type + ', '
        }

        let listService = [];
        for (let i = 0; i <= service.length - 1; i++) {
            listService.push(service[i].name + ' (' + service[i].quantity + ')')
        }

        return (
            <View style={styles.containerTK}>
                <TouchableOpacity style={styles.btnIconXTK} onPress={() => navigation.goBack()}>
                    <Image style={styles.iconXTK} source={require('../../../../assets/images/iconX.png')} />
                </TouchableOpacity>
                <View style={styles.itemTK}>
                    <View style={styles.item2TK}>
                        <Text style={styles.textBigTK}>THÔNG TIN VÉ</Text>
                        <Text style={styles.textinfoTK}>{listTicket.slice(0, listTicket.length - 2)}</Text>
                        <View style={styles.item21TK}>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>ID hoá đơn:</Text>
                                <Text style={styles.textinfoTK}>{bill.id}</Text>
                            </View>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Người tạo:</Text>
                                <Text style={styles.textinfoTK}>{user.name} {user.first_name}</Text>
                            </View>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Ngày đến</Text>
                                <Text style={styles.textinfoTK}>{this.formatDate(bill.visit_date)}</Text>
                            </View>
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Ngày tạo</Text>
                                <Text style={styles.textinfoTK}>{this.formatDate(bill.created_at)}</Text>
                            </View>
                            {
                                more === false ?
                                    <View style={styles.itemInfoTK}>
                                        <Text style={styles.textBtnTK}>Dịch vụ</Text>
                                        {
                                            service.length > 0 ?
                                                (listService.length === 1 ?
                                                    <Text style={styles.textinfoTK}>{listService[0]}</Text>
                                                    :
                                                    <TouchableOpacity style={styles.viewRowinfoTK} onPress={() => this.setMore(true)}>
                                                        <Text style={styles.textinfoTK}>{listService[0]}</Text>
                                                        <Image style={styles.iconMoreTK} source={require('../../../../assets/images/Ticket/more.png')} />
                                                    </TouchableOpacity>

                                                )
                                                : <Text style={styles.textinfoTK}>Không có</Text>
                                        }
                                    </View>
                                    :
                                    <View style={styles.itemInfoTK}>
                                        <Text style={styles.textBtnTK}>Dịch vụ</Text>
                                        <TouchableOpacity style={styles.viewListServiceTK} onPress={() => this.setMore(false)}>
                                            {
                                                listService.map((item, index) => (
                                                    <Text key={index} style={styles.textinfoTK}>{item}</Text>
                                                ))
                                            }
                                        </TouchableOpacity>
                                    </View>
                            }
                            <View style={styles.itemInfoTK}>
                                <Text style={styles.textBtnTK}>Tổng tiền</Text>
                                {
                                    bill.total_price ? (<Text style={styles.textinfoTK}>{bill.total_price.toLocaleString()} vnđ</Text>) : null
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}
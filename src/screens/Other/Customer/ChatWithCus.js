import React, { Component } from 'react';
import { View, Text, RefreshControl, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { getBillCancel } from '../../../../api/service/ticket';
import TabBack from '../../../components/TabBack';
import colors from '../../../../assets/colors/colors';

class ChatWithCus extends Component {
    state = {
        data: [],
        isLoading: true,
        refreshing: false
    };

    refreshData() {
        this.setState({ refreshing: true });

        // Gọi lại hàm getAllAnimal để lấy dữ liệu sự kiện ban đầu
        this.getAllData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    async getAllData() {
        try {
            this.setState({ data: await getBillCancel() })
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getAllData();
    }

    // Hàm tính toán số tiền hoàn lại dựa trên số ngày huỷ trước
    calculateRefund = (date, price) => {
        let refundPercentage = 0;
        const cancellationDays = date

        if (cancellationDays >= 7) {
            refundPercentage = 100;
        } else if (cancellationDays >= 3 && cancellationDays < 7) {
            refundPercentage = 50;
        } else if (cancellationDays >= 1 && cancellationDays < 3) {
            refundPercentage = 20;
        } else {
            refundPercentage = 0;
        }

        const totalPrice = price; // Giá trị đơn hàng ban đầu
        const refundAmount = (totalPrice * refundPercentage) / 100;

        return refundAmount;
    };

    render() {
        const { data } = this.state;
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <TabBack navigation={navigation} title={'yêu cầu hoàn tiền'} />
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => index}
                    style={styles.listAllAnimal}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.refreshData()}
                        />
                    }
                    renderItem={({ item, index }) => (
                        <View style={{padding: 16}}>
                            <TouchableOpacity key={index} style={styles.viewList} onPress={() => navigation.navigate('TicketsPaidScreen', { data: item })}>
                                <View style={styles.viewRow}>
                                    <Text style={styles.text}>ID: {item.bill.id}</Text>
                                    <Text style={styles.text}>{item.employer[0].name} {item.employer[0].first_name}</Text>
                                </View>
                                <Text style={styles.text}>Huỷ trước {item.bill.isCancel} ngày</Text>
                                <Text style={styles.text}>Số tiền cần hoàn: {this.calculateRefund(item.bill.isCancel, item.bill.total_price).toLocaleString()} vnđ</Text>
                            </TouchableOpacity>
                            <Button title='Hoàn tiền' onPress={() => navigation.navigate('RefundVNpay', { codeBill: item.bill.codeBill, price: this.calculateRefund(item.bill.isCancel, item.bill.total_price), id: item.bill.id })} />
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    viewRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    viewList: {
        marginVertical: 16,
        padding: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    image: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
    },
});

export default ChatWithCus;

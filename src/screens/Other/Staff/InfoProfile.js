import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import colors from '../../../../assets/colors/colors';
import TabBack from '../../../components/TabBack';

export default class InfoProfile extends Component {
    render() {
        const data = this.props.route.params.data;
        const title = this.props.route.params.title;
        const navigation = this.props.navigation
        const formatDate = (date) => {
            return `${date.getDate()}/${date.getMonth() +
                1}/${date.getFullYear()}`;
        };

        return (
            <View style={styles.container1}>
                <TabBack navigation={navigation} title={'thông tin chi tiết'} />
                <View style={styles.container}>
                <Image style={styles.image} source={ data.avatar_url ? { uri: data.avatar_url } : require('../../../../assets/images/avatar/avatar.png') } />
                <Text style={styles.title}>Thông tin {title}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Họ Tên:</Text>
                    <Text style={styles.value}>{data.first_name} {data.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Giới tính:</Text>
                    <Text style={styles.value}>{data.gender ? (data.gender ? 'Nam' : 'Nữ') : 'không'}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Ngày sinh:</Text>
                    <Text style={styles.value}>{data.birth_date ? formatDate(new Date(data.birth_date)) : 'không'}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{data.email}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Số ĐT:</Text>
                    <Text style={styles.value}>{data.phone ? data.phone : 'không'}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Địa chỉ:</Text>
                    <Text style={styles.value}>{data.address ? data.address : 'không'}</Text>
                </View>
                </View>               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: colors.text
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '5%'
    },
    image: {
        height: screenWidth / 3,
        width: screenWidth / 3
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: screenHeight * 0.02,
        color: colors.black
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: screenHeight * 0.02,
        marginLeft: '10%'
    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        marginRight: screenWidth * 0.05,
        fontSize: 20,
        color: colors.black
    },
    value: {
        flex: 2,
        fontSize: 20,
        color: colors.black
    },
});
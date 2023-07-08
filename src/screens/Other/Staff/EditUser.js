import { Text, View, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, Button, Platform } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/EditUserStyle.js';
import { update_Khachhang } from '../../../../api/method/put.js';
import { uploadImageUser, delImageFire } from '../../../../api/service/account.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataTemp: [],
            ho: '',
            ten: '',
            gioiTinh: '',
            diaChi: '',
            sdt: '',
            email: '',
            anhDaiDien: '',
            date: new Date(this.props.route.params.data.birth_date),
            gender: this.props.route.params.data.gender,
            show: false,
            images: []
        };
    }

    selectImageFromLibrary = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.error) {
                const image = response.assets[0].uri;

                this.setState(prevState => ({
                    images: [...prevState.images, image],
                }));
            }
        });
    };

    takePhoto = () => {
        launchCamera({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.error) {
                const image = response.uri;

                this.setState(prevState => ({
                    images: [...prevState.images, image],
                }));
            }
        });
    };

    setValue(text, index) {
        if (index === 1)
            this.setState({ ho: text })
        if (index === 2)
            this.setState({ ten: text })
        if (index === 3)
            this.setState({ gioiTinh: text })
        // if (index === 4)
        //   this.setState({ ngaySinh: text })
        if (index === 5)
            this.setState({ diaChi: text })
        if (index === 6)
            this.setState({ sdt: text })
        if (index === 7)
            this.setState({ email: text })
        if (index === 8)
            this.setState({ anhDaiDien: text })
    }

    async UpdateKH(idKH) {
        const data = this.props.route.params.data
        if (this.state.ho !== '')
            data.first_name = this.state.ho
        if (this.state.ten !== '')
            data.name = this.state.ten
        if (this.state.diaChi !== '')
            data.address = this.state.diaChi
        if (this.state.sdt !== '')
            data.phone = this.state.sdt
        if (this.state.email !== '')
            data.email = this.state.email

        data.gender = this.state.gender ? 1 : 0
        data.birth_date = this.state.date

        const imgAvatar = data.avatar_url
        const imgChoice = this.state.images

        if (imgAvatar === null) {
            if (imgChoice.length === 0)
                data.avatar_url = imgAvatar
            else {
                data.avatar_url = imgChoice[0]
                await uploadImageUser(imgChoice, 'user', data.id)
            }
        }
        else {
            if (imgChoice.length === 0)
                data.avatar_url = imgAvatar
            else {
                data.avatar_url = imgChoice[0]
                await delImageFire('user', imgAvatar, data.id)
                await uploadImageUser(imgChoice, 'user', data.id)
            }
        }

        await update_Khachhang(data, idKH)
    }

    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    setGender(option) {
        this.setState({ gender: option })
    }

    show = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    datepicker = () => {
        this.show('date');
    }

    render() {
        const data = this.props.route.params.data
        const { show, date, mode, gender, images } = this.state

        const formatDate = (date) => {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }

        return (
            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.header}>
                    <Image
                        style={styles.iconArrow}
                        source={require('../../../../assets/images/IconBack.png')}
                    />
                    <Text style={styles.textTitle}>Chỉnh sửa thông tin</Text>
                </TouchableOpacity>
                <View style={styles.info}>
                    <ImageBackground style={styles.imageCover} source={require('../../../../assets/images/splash_bg.jpg')}>
                        {images.length <= 0 ?
                            <Image
                                style={styles.imageAvatar}
                                source={data.avatar_url ? { uri: data.avatar_url } : require('../../../../assets/images/avatar/avatar.png')}
                            /> :
                            <Image
                                style={styles.imageAvatar}
                                source={{ uri: images[0] }}
                            />
                        }
                        <TouchableOpacity style={styles.btnEdit} onPress={this.selectImageFromLibrary}>
                            <Image
                                style={styles.iconEdit}
                                source={require('../../../../assets/images/manager/editProfile.png')}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.viewChoose}>
                        <Text style={styles.textTitleInfo}>Họ</Text>
                        <TextInput style={styles.textClick} placeholderTextColor={'gray'} placeholder={data.first_name} onChangeText={text => this.setValue(text, 1)} />
                    </View>
                    <View style={styles.viewChoose}>
                        <Text style={styles.textTitleInfo}>Tên</Text>
                        <TextInput style={styles.textClick} placeholderTextColor={'gray'} placeholder={data.name} onChangeText={text => this.setValue(text, 2)} />
                    </View>
                    <View style={styles.viewChoose1}>
                        <Text style={styles.textTitleInfo}>Giới tính</Text>
                        <View style={styles.viewGender}>
                            <TouchableOpacity style={gender ? styles.viewBtnGender : styles.viewBtnGenderNot} onPress={() => this.setGender(true)}>
                                <Text style={gender ? styles.textGender : styles.textGenderNot}>Nam</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={gender ? styles.viewBtnGenderNot : styles.viewBtnGender} onPress={() => this.setGender(false)}>
                                <Text style={gender ? styles.textGenderNot : styles.textGender}>Nữ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewChoose}>
                        <Text style={styles.textTitleInfo}>Ngày sinh</Text>
                        <Text style={styles.textClickDate}>{formatDate(date)}</Text>
                        <Button onPress={this.datepicker} title="Show" />
                        {
                            show &&
                            <DateTimePicker value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={this.setDate}
                            />
                        }
                    </View>
                    <View style={styles.viewChoose}>
                        <Text style={styles.textTitleInfo}>Địa chỉ</Text>
                        <TextInput style={styles.textClick} placeholderTextColor={'gray'} placeholder={data.address} onChangeText={text => this.setValue(text, 5)} />
                    </View>
                    <View style={styles.viewChoose1}>
                        <Text style={styles.textTitleInfo}>Số điện thoại</Text>
                        <TextInput style={styles.textClick} placeholderTextColor={'gray'} placeholder={data.phone === null ? '' : data.phone.toString()} onChangeText={text => this.setValue(text, 6)} />
                    </View>
                    <View style={styles.viewChoose}>
                        <Text style={styles.textTitleInfo}>Email</Text>
                        <TextInput style={styles.textClick} placeholderTextColor={'gray'} placeholder={data.email} onChangeText={text => this.setValue(text, 7)} />
                    </View>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.btnSubmit} onPress={() => this.UpdateKH(data.id)}>
                        <Text style={styles.textBtn}>Cập Nhật</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import TabBack from '../../../components/TabBack';
import DropdownList from '../../../components/DropdownList ';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateChoice from '../../../components/DateChoice';
import { updateEvent } from '../../../../api/service/event';

export default class InfoEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.route.params.data.location,
      images: [],
      loading: false,
      event: this.props.route.params.data,
      dateStart: this.props.route.params.data.start_time,
      dateEnd: this.props.route.params.data.end_time
    };
  }

  setValue(title, text) {
    this.setState(prevState => ({
      event: {
        ...prevState.event,
        [title]: text
      }
    }));
  }

  setSelectedDropdownValue = async (value) => {
    this.setState({ location: value });
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

  handleDateChange = (title, date) => {
    this.setState({ [title]: date.toString() })
  }

  async updateEvent() {
    const { event, dateStart, dateEnd, location } = this.state
    event.location = location,
    event.start_time = new Date(dateStart)
    event.end_time = new Date(dateEnd)
    event.price = +event.price
    event.longTime = +event.longTime

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYxMTYzMDIsImV4cCI6MTY4NjEyNzEwMn0.baFZYgMbd9Ioupkxby-dnFT2oZW8tMD97P3_V4Io4YU'
    await updateEvent(event, token)
    alert('Cập nhập sự kiện thành công !!!')
    this.props.navigation.goBack()
}

  render() {
    const { location, event, images, loading, dateStart, dateEnd } = this.state;
    const navigation = this.props.navigation
    const formatDate = (date1) => {
      const date = new Date(date1)
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    const options = [
      { label: 'Phòng hội thảo', value: 'Phòng hội thảo' },
      { label: 'Khu vực ngày hội', value: 'Khu vực ngày hội' },
      { label: 'Sở thú', value: 'Sở thú' },
      { label: 'Sân trình diễn', value: 'Sân trình diễn' },
      { label: 'Phòng nghệ thuật', value: 'Phòng nghệ thuật' },
      { label: 'Khu vực đêm tiệc', value: 'Khu vực đêm tiệc' },
      { label: 'Khu vực Gia đình', value: 'Khu vực Gia đình' },
      { label: 'Khu vực tham quan', value: 'Khu vực tham quan' },
      { label: 'Khu vực nuôi dưỡng', value: 'Khu vực nuôi dưỡng' },
      { label: 'Khu vực thử rượu', value: 'Khu vực thử rượu' }
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <TabBack navigation={navigation} title={'cập nhập'} />
          <View>
            <View style={styles.horizontalContainer}>
              <Image style={styles.imageEdit} source={{ uri: event.image_url }} />
              {images.map((image, index) => (
                <Image key={index} style={styles.imageEdit} source={{ uri: image }} />
              ))}
              <TouchableOpacity style={[styles.imageEdit, { justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'green', borderStyle: 'dashed' }]} onPress={this.selectImageFromLibrary}>
                <Image style={styles.imageAddImg} source={require('../../../../assets/images/manager/addImg.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.viewInputEdit}>
              <DateChoice onDateChange={date => this.handleDateChange('dateStart', date)} />
              <TextInput style={[styles.inputEdit, { height: '85%' }]} editable={false} value={formatDate(dateStart)} />
            </View>
            <View style={styles.viewInputEdit}>
              <DateChoice onDateChange={date => this.handleDateChange('dateEnd', date)} />
              <TextInput style={[styles.inputEdit, { height: '85%' }]} editable={false} value={formatDate(dateEnd)} />
            </View>

            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Tên</Text>
              <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('name', text)} placeholder='Nhập tên sự kiện' value={event.name} />
            </View>
            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Giá</Text>
              <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue('price', text)} placeholder='Nhập số tiền' value={event.price.toString()} keyboardType="numeric" />
            </View>
            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Kéo dài</Text>
              <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue('longTime', text)} placeholder='Nhập số tiền' value={event.longTime.toString()} keyboardType="numeric" />
            </View>
            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Địa điểm</Text>
              <DropdownList
                size={true}
                title={'Lựa chọn'}
                selectedValue={location}
                setSelectedValue={(value) => this.setSelectedDropdownValue(value)}
                options={options}
              />
            </View>
            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Mô tả ngắn</Text>
              <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('description_short', text)} placeholder='Nhập mô tả' value={event.description_short} />
            </View>
            <View style={styles.viewInputEdit}>
              <Text style={styles.textInputEdit}>Chi tiết</Text>
              <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue('description', text)} numberOfLines={10} multiline={true} placeholder='Nhập chi tiết mô tả' value={event.description} />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() => this.updateEvent()}>
              <Text style={styles.saveButtonText}>Lưu thay đổi</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
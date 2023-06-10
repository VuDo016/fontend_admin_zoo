import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import TabBack from '../../../components/TabBack';
import DropdownList from '../../../components/DropdownList ';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { createAnimal, uploadImageAnimal } from '../../../../api/service/animal';

export default class AddAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiCount: 0, // Số lượng UI đã được tạo
            speacies: '',
            food: '',
            habitat: '',
            iucn: '',
            images: [],
            data: {
                name: null,
                species: null,
                habitat: [null, null],
                description: [[null, null]],
                age: [null, null],
                food: [null, null],
                area: [null, null],
                iconFood: null,
                iconHabitat: null,
                iucn_status_id: null,
                name2: null
            }
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

    handleAddUI() {
        this.setState(prevState => {
            const newUiCount = prevState.uiCount + 1;
            const updatedDescription = [...prevState.data.description];
            updatedDescription.push([null, null]);

            return {
                uiCount: newUiCount,
                data: {
                    ...prevState.data,
                    description: updatedDescription,
                },
            };
        });
    }

    renderUIs = () => {
        const { uiCount } = this.state;
        const uis = [];

        for (let i = 1; i <= uiCount; i++) {
            uis.push(
                <View key={i}>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue2(text, i, 0)} placeholder='Nhập tiêu đề' />
                    </View>
                    <View style={[styles.viewInputEdit1, { marginTop: '10%' }]}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue2(text, i, 1)} placeholder='Nhập chi tiết' />
                    </View>
                </View>
            );
        }

        return uis;
    };

    setSelectedDropdownValue = async (value, index) => {
        if (index === 1)
            this.setState({ speacies: value });
        else if (index === 2)
            this.setState({ food: value });
        else if (index === 3)
            this.setState({ habitat: value });
        else if (index === 4)
            this.setState({ iucn: value });
    }

    setValue(title, text) {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [title]: text
            }
        }));
    }

    setValue1(title, text, index) {
        this.setState(prevState => {
            const age = [...prevState.data[title]]; // Tạo bản sao của mảng age
            age[index] = text; // Đặt giá trị mới cho phần tử tại chỉ số index

            return {
                data: {
                    ...prevState.data,
                    [title]: age
                }
            };
        });
    }

    setValue2(text, index, index1) {
        this.setState(prevState => {
            const updatedValue = [...prevState.data.description];
            const targetLength = index + 1;

            // Thêm các phần tử null vào mảng nếu cần thiết
            while (updatedValue.length < targetLength) {
                updatedValue.push(null);
            }

            updatedValue[index][index1] = text;

            return {
                data: {
                    ...prevState.data,
                    description: updatedValue,
                },
            };
        });
    }

    async createAnimal() {
        const {speacies, images, iucn, food, habitat, data} = this.state
        data.species = speacies
        data.iucn = +iucn
        data.iconFood = +food
        data.iconHabitat = +habitat
        data.food = data.food[0] + '|' + data.food[1]
        data.habitat = data.habitat[0] + '|' + data.habitat[1]
        data.age = data.age[0] + '|' + data.age[1]
        data.area = data.area[0] + '|' + data.area[1]
        data.description = data.description.map(arr => `{${arr.join(" | ")}}`).join(" ");

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYwNTIyNTgsImV4cCI6MTY4NjA1NTg1OH0.afWk0lzQfNS-BeHOmvKeFlr6sMMy9t6HKQy8Uo9iV3g'
        const id = await createAnimal(data, token)
        await uploadImageAnimal(images, 'animal', id, token)
        alert('Tạo động vật mới thành công !!!')
        this.props.navigation.goBack()
    }

    render() {
        const { speacies, food, habitat, iucn, images } = this.state;

        const navigation = this.props.navigation
        const options = [
            { label: 'Động vật không xương sống', value: 'Động vật không xương sống' },
            { label: 'Cá', value: 'Cá' },
            { label: 'Động vật lưỡng cư', value: 'Động vật lưỡng cư' },
            { label: 'Bò sát', value: 'Bò sát' },
            { label: 'Các loài chim', value: 'Các loài chim' },
            { label: 'Động vật có vú', value: 'Động vật có vú' }
        ];
        const food1 = [
            { label: 'côn trùng', value: '1' },
            { label: 'hải sản', value: '2' },
            { label: 'thịt', value: '3' },
            { label: 'hạt', value: '4' },
            { label: 'rau, cỏ', value: '5' }
        ]
        const habitat1 = [
            { label: 'rừng rậm', value: '1' },
            { label: 'khí hậu lạnh', value: '2' },
            { label: 'dưới nước', value: '3' },
            { label: 'đầm lầy', value: '4' }
        ]
        const iucn1 = [
            { label: 'Dữ liệu không đủ', value: '1' },
            { label: 'Loài ít quan tâm', value: '2' },
            { label: 'Gần nguy cơ', value: '3' },
            { label: 'Nguy cơ', value: '4' },
            { label: 'Cực kỳ nguy cơ', value: '5' },
            { label: 'Nguy cơ tuyệt chủng', value: '6' },
            { label: 'Tuyệt chủng ở tự nhiên', value: '7' },
            { label: 'Tuyệt chủng', value: '8' }
        ]

        return (
            <View style={styles.container}>
                <TabBack navigation={navigation} title={'thêm mới'} />
                <ScrollView>
                    <View style={styles.horizontalContainer}>
                        {images.map((image, index) => (
                            <Image key={index} style={styles.imageEdit} source={{ uri: image }} />
                        ))}
                        <TouchableOpacity style={[styles.imageEdit, { justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'green', borderStyle: 'dashed' }]} onPress={this.selectImageFromLibrary}>
                            <Image style={styles.imageAddImg} source={require('../../../../assets/images/manager/addImg.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Tên</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('name', text)} placeholder='Nhập tên động vật' />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('name2', text)} placeholder='Nhập tên khoa học của nó' />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Lớp</Text>
                        <DropdownList
                            size={true}
                            title={'Loại động vật'}
                            selectedValue={speacies}
                            setSelectedValue={(value) => this.setSelectedDropdownValue(value, 1)}
                            options={options}
                        />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Tuổi</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('age', text, 0)} placeholder='Nhập tiêu đề' />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('age', text, 1)} placeholder='Nhập chi tiết' />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Thức ăn</Text>
                        <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue1('food', text, 0)} placeholder='Nhập tiêu đề' />
                        <DropdownList
                            size={false}
                            title={'Chọn'}
                            selectedValue={food}
                            setSelectedValue={(value) => this.setSelectedDropdownValue(value, 2)}
                            options={food1}
                        />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('food', text, 1)} placeholder='Nhập chi tiết' />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Môi trường</Text>
                        <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue1('habitat', text, 0)} placeholder='Nhập tiêu đề' />
                        <DropdownList
                            size={false}
                            title={'Chọn'}
                            selectedValue={habitat}
                            setSelectedValue={(value) => this.setSelectedDropdownValue(value, 3)}
                            options={habitat1}
                        />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('habitat', text, 1)} placeholder='Nhập chi tiết' />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Phạm vi</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('area', text, 0)} placeholder='Nhập tiêu đề' />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('area', text, 1)} placeholder='Nhập chi tiết' />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Mô tả</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue2(text, 0, 0)} placeholder='Nhập tiêu đề' />
                    </View>
                    <View style={[styles.viewInputEdit1, { marginTop: '10%' }]}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue2(text, 0, 1)} underlineColorAndroid="transparent" numberOfLines={3} multiline={true} placeholder='Nhập chi tiết' />
                    </View>
                    {this.renderUIs()}
                    <TouchableOpacity style={styles.addButton} onPress={() => this.handleAddUI()}>
                        <Text style={styles.addButtonText}>Thêm</Text>
                    </TouchableOpacity>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>IUCN</Text>
                        <DropdownList
                            size={5}
                            title={'Tình trạng tuyệt chủng'}
                            selectedValue={iucn}
                            setSelectedValue={(value) => this.setSelectedDropdownValue(value, 4)}
                            options={iucn1}
                        />
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={() => this.createAnimal()}>
                        <Text style={styles.saveButtonText}>Thêm mới</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
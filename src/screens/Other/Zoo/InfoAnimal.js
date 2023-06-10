import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { Component } from 'react'

import styles from '../../../styles/AnimalStyles'
import TabBack from '../../../components/TabBack';
import DropdownList from '../../../components/DropdownList ';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { updateAnimal, uploadImageAnimal } from '../../../../api/service/animal';

export default class InfoAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiCount: 0, // Số lượng UI đã được tạo
            speacies: '',
            food: '',
            habitat: '',
            iucn: '',
            images: [],
            loading: false,
            animal: this.props.route.params.data,
        };
    }

    componentDidMount() {
        const animal = this.state.animal
        const iucn = [
            { label: 'Data Deficient', value: '1' },
            { label: 'Least Concern', value: '2' },
            { label: 'Near Threatened', value: '3' },
            { label: 'Vulnerable', value: '4' },
            { label: 'Endangered', value: '5' },
            { label: 'Critically Endangered', value: '6' },
            { label: 'Extinct in the Wild', value: '7' },
            { label: 'Extinct', value: '8' }
        ]
        const result = iucn.find(item => item.label === animal.title)
        this.setState({ speacies: animal.species, iucn: result.value })
        const descrip = animal.description.split("{").map(part => part.replace("}", "").trim()).filter(part => part !== "");
        this.setState(prevState => ({
            animal: {
                ...prevState.animal,
                age: [animal.age.split('|')[0], animal.age.split('|')[1]],
                area: [animal.area.split('|')[0], animal.area.split('|')[1]],
                food: [animal.food.split('|')[0], animal.food.split('|')[1]],
                habitat: [animal.habitat.split('|')[0], animal.habitat.split('|')[1]],
                description: descrip.map(item => item.split(" | "))
            }
        }));
        this.setState({ loading: true })
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
            const updatedDescription = [...prevState.animal.description];
            updatedDescription.push([null, null]);

            return {
                uiCount: newUiCount,
                animal: {
                    ...prevState.animal,
                    description: updatedDescription,
                },
            };
        });
    }

    renderUIs = (length) => {
        const { uiCount } = this.state;
        const uis = [];

        for (let i = 1; i <= uiCount; i++) {
            const index = length + i - 1; // chỉ mục của thành phần UI trong mảng updatedDescription
            uis.push(
                <View key={i}>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue2(text, index, 0)} placeholder='Nhập tiêu đề' />
                    </View>
                    <View style={[styles.viewInputEdit1, { marginTop: '10%' }]}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue2(text, index, 1)} placeholder='Nhập chi tiết' />
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
            animal: {
                ...prevState.animal,
                [title]: text
            }
        }));
    }

    setValue1(title, text, index) {
        this.setState(prevState => {
            const age = [...prevState.animal[title]]; // Tạo bản sao của mảng age
            age[index] = text; // Đặt giá trị mới cho phần tử tại chỉ số index

            return {
                animal: {
                    ...prevState.animal,
                    [title]: age
                }
            };
        });
    }

    setValue2(text, index, index1) {
        this.setState(prevState => {
            const updatedValue = [...prevState.animal.description];
            const targetLength = index + 1;

            // Thêm các phần tử null vào mảng nếu cần thiết
            while (updatedValue.length < targetLength) {
                updatedValue.push(null);
            }

            updatedValue[index][index1] = text;

            return {
                animal: {
                    ...prevState.animal,
                    description: updatedValue,
                },
            };
        });
    }

    async updateAnimal() {
        const { speacies, images, iucn, food, habitat, animal } = this.state
        const data = {
            id: animal.id,
            name: animal.name,
            species: speacies,
            habitat: animal.habitat[0] + '|' + animal.habitat[1],
            description: animal.description.map(arr => `{${arr.join(" | ")}}`).join(" "),
            age: animal.age[0] + '|' + animal.age[1],
            food: animal.food[0] + '|' + animal.food[1],
            area: animal.area[0] + '|' + animal.area[1],
            iconFood: +food,
            iconHabitat: +habitat,
            iucn_status_id: +iucn,
            name2: animal.name2
        }

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoidnVkbzQ1NkBnbWFpbC5jb20iLCJpYXQiOjE2ODYwNTIyNTgsImV4cCI6MTY4NjA1NTg1OH0.afWk0lzQfNS-BeHOmvKeFlr6sMMy9t6HKQy8Uo9iV3g'

        await updateAnimal(data, token)
        await uploadImageAnimal(images, 'animal', animal.id, token)
        alert('Cập nhập động vật thành công !!!')
        this.props.navigation.goBack()
    }

    render() {
        const { speacies, food, habitat, iucn, animal, images, loading } = this.state;
        const navigation = this.props.navigation
        const uniqueUrls = [...new Set(animal.images)];
        const options = [
            { label: 'Động vật không xương sống', value: 'Động vật không xương sống' },
            { label: 'Cá', value: 'Cá' },
            { label: 'Động vật lưỡng cư', value: 'Động vật lưỡng cư' },
            { label: 'Bò sát', value: 'Bò sát' },
            { label: 'Các loài chim', value: 'Các loài chim' },
            { label: 'Động vật có vú', value: 'Động vật có vú' }
        ];
        const food1 = [
            { label: 'côn trùng', value: 'côn trùng' },
            { label: 'hải sản', value: 'cá, hải sản' },
            { label: 'thịt', value: 'thịt' },
            { label: 'hạt', value: 'hạt' },
            { label: 'rau, cỏ', value: 'rau, cỏ' },
        ]
        const habitat1 = [
            { label: 'rừng rậm', value: 'rừng rậm' },
            { label: 'khí hậu lạnh', value: 'khí hậu lạnh' },
            { label: 'dưới nước', value: 'dưới nước' },
            { label: 'đầm lầy', value: 'đầm lầy' },
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
                <TabBack navigation={navigation} title={'cập nhập'} />
                <ScrollView>
                    <View style={styles.horizontalContainer}>
                        {uniqueUrls.map((image, index) => (
                            <Image key={index} style={styles.imageEdit} source={{ uri: image }} />
                        ))}
                        {images.map((image, index) => (
                            <Image key={index} style={styles.imageEdit} source={{ uri: image }} />
                        ))}
                        <TouchableOpacity style={[styles.imageEdit, { justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'green', borderStyle: 'dashed' }]} onPress={this.selectImageFromLibrary}>
                            <Image style={styles.imageAddImg} source={require('../../../../assets/images/manager/addImg.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Tên</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('name', text)} placeholder='Nhập tên động vật' value={animal.name} />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue('name2', text)} placeholder='Nhập tên khoa học của nó' value={animal.name2} />
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
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('age', text, 0)} placeholder='Nhập tiêu đề' value={animal.age[0]} />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('age', text, 1)} placeholder='Nhập chi tiết' value={animal.age[1]} />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Thức ăn</Text>
                        <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue1('food', text, 0)} placeholder='Nhập tiêu đề' value={animal.food[0]} />
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
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('food', text, 1)} placeholder='Nhập chi tiết' value={animal.food[1]} />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Môi trường</Text>
                        <TextInput style={styles.inputEdit1} onChangeText={text => this.setValue1('habitat', text, 0)} placeholder='Nhập tiêu đề' value={animal.habitat[0]} />
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
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('habitat', text, 1)} placeholder='Nhập chi tiết' value={animal.habitat[1]} />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Phạm vi</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('area', text, 0)} placeholder='Nhập tiêu đề' value={animal.area[0]} />
                    </View>
                    <View style={styles.viewInputEdit1}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue1('area', text, 1)} placeholder='Nhập chi tiết' value={animal.area[1]} />
                    </View>
                    <View style={styles.viewInputEdit}>
                        <Text style={styles.textInputEdit}>Mô tả</Text>
                        <TextInput style={styles.inputEdit} onChangeText={text => this.setValue2(text, 0, 0)} placeholder='Nhập tiêu đề' value={animal.description[0][0]} />
                    </View>
                    <View style={[styles.viewInputEdit1, { marginTop: '10%' }]}>
                        <Text style={styles.textInputEdit}></Text>
                        <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue2(text, 0, 1)} underlineColorAndroid="transparent" numberOfLines={3} multiline={true} placeholder='Nhập chi tiết' value={animal.description[0][1]} />
                    </View>
                    {
                        loading ?
                            (
                                animal.description.slice(1, animal.description.length).map((item, index) => (
                                    <View key={index}>
                                        <View style={styles.viewInputEdit}>
                                            <Text style={styles.textInputEdit}></Text>
                                            <TextInput style={styles.inputEdit} onChangeText={text => this.setValue2(text, index + 1, 0)} placeholder='Nhập tiêu đề' value={item[0]} />
                                        </View>
                                        <View style={[styles.viewInputEdit1, { marginTop: '10%' }]}>
                                            <Text style={styles.textInputEdit}></Text>
                                            <TextInput style={styles.inputEdit2} onChangeText={text => this.setValue2(text, index + 1, 1)} underlineColorAndroid="transparent" numberOfLines={3} multiline={true} placeholder='Nhập chi tiết' value={item[1]} />
                                        </View>
                                    </View>
                                ))
                            )
                            :
                            null
                    }
                    {this.renderUIs(animal.description.length)}
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
                    <TouchableOpacity style={styles.saveButton} onPress={() => this.updateAnimal()}>
                        <Text style={styles.saveButtonText}>Lưu thay đổi</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
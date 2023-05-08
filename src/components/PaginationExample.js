import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/ComponentStyles'

export default class PaginationExample extends Component {
    render() {
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        return (
            <View style={styles.container1}>
                <View style={styles.item1}>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.textBtn2}>⪻ Trước</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.textBtn2}>Sau ⪼</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item2}>
                    {
                        number.map((item, index) => (
                            <TouchableOpacity style={styles.btn2} key={index}>
                                <Text style={styles.textBtn2}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }
}
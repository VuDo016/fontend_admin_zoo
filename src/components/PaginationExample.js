import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../styles/ComponentStyles'

export default class PaginationExample extends Component {
    handlePageChange = (page) => {
        const { onPageChange } = this.props;
        if (page >= 1 && page <= 9) {
            onPageChange(page);
        }
    };

    render() {
        const { currentPage, totalPages } = this.props;
        const number = Array.from({ length: totalPages }, (_, index) => index + 1);

        return (
            <View style={styles.container1}>
                <View style={styles.item1}>
                    <TouchableOpacity style={styles.btn1} onPress={() => this.handlePageChange(currentPage - 1)}>
                        <Text style={styles.textBtn2}>⪻ Trước</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={() => this.handlePageChange(currentPage + 1)}>
                        <Text style={styles.textBtn2}>Sau ⪼</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item2}>
                    {number.map((item, index) => (
                        <TouchableOpacity style={styles.btn2} key={index} onPress={() => this.handlePageChange(item)}>
                            <Text style={styles.textBtn2}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

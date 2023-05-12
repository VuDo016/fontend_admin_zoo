import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
import React, { Component } from 'react'
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import colors from '../../../assets/colors/colors';

export default class ScanQRcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'null'
        };
    }

    setData(data) {
        this.setState(data);
    }

    render() {
        const {data} = this.state

        return (
            <QRCodeScanner
                onRead={(data) => this.setData(data)}
                flashMode={RNCamera.Constants.FlashMode.torch}
                showMarker={true}
                markerStyle={{ borderColor: colors.text, borderWidth: 10, borderRadius: 20, opacity: 0.5 }}
                topContent={
                    <Text style={styles.centerText}>
                        <Text style={styles.textBold}>Thông tin:  {data}</Text>
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
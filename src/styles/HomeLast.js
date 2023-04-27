import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    viewheader: {
        height: screenHeight / 2.6,
        width: '100%'
    },
    imageHead: {
        height: screenHeight / 3,
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        opacity: 0.7
    },
    viewTime: {
        height: screenHeight / 8,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.mainHome,
        borderRadius: 20,
        paddingHorizontal: '6%',
        position: 'absolute',
        top: '65%',
        left: '10%',
        zIndex: 1
    },
    iconClock: {
        height: '60%',
        width: '20%',
        tintColor: colors.phaneon
    },
    textHead: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text
    },
    viewTitle: {
        height: screenHeight / 9,
        width: '65%',
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
        position: 'absolute',
        top: '10%',
        left: '17.5%',
        opacity: 0.5,
        borderRadius: 10

    },
    textHead1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.text
    }
})

export default styles;
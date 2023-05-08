import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        height: screenHeight / 10,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '3%',
        backgroundColor: colors.greenLight,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: colors.mainHome
    },
    button: {
        justifyContent: 'center',
        height: '100%',
        width: '30%',
        position: 'absolute',
        left: '5%'
    },
    imageBack: {
        height: '40%',
        width: '30%'
    },
    textFoot: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    ///////////////////////////
    container1: {
        height: screenHeight / 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '5%',
        marginHorizontal: '2%'
    },
    item1: {
        flexDirection: 'row',
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item2: {
        flexDirection: 'row',
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn1: {
        height: '70%',
        width: '30%',
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.main,
        backgroundColor: colors.text
    },
    btn2: {
        height: '70%',
        width: '9%',
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.main,
        backgroundColor: colors.text
    },
    textBtn2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.greenDark
    }
})

export default styles;
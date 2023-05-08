import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    viewheader: {
        height: screenHeight / 1.5,
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
        top: '40%',
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
    viewStaff: {
        height: screenHeight / 6,
        width: '100%',
        flexDirection: 'row',
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '2%'
    },
    viewItemStaff: {
        height: '100%',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.greenLight,
        borderRadius: 20,
        paddingVertical: '3%',
        paddingHorizontal: '6%',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
        borderWidth: 2,
        borderColor: colors.mainHome
    },
    imgStaff: {
        height: '55%',
        width: '80%'
    },
    textItemStaff: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    containerFoot: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '7%'
    },
    textTitleItem: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: '2%'
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
    },
    viewItem: {
        height: screenHeight / 5,
        width: '45%',
        margin: '2%',
        backgroundColor: colors.orange,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15
    },
    imageItem: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    viewInfoItem: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '10%'
    },
    textItem: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.greenLight
    },
    viewIncon: {
        height: '60%',
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.phaneon,
        borderRadius: 200
    },
    iconItem: {
        height: '70%',
        width: '70%',
        tintColor: colors.text
    },
    viewFoot: {
        flexDirection: 'row',
        height: screenHeight / 9,
        width: '95%',
        marginHorizontal: '2%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '3%',
        backgroundColor: colors.greenLight,
        borderRadius: 20,
        padding: '4%',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
        borderWidth: 2,
        borderColor: colors.mainHome
    },
    imgFoot: {
        height: '90%',
        width: '12%'
    },
    textFoot: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    arrowFoot: {
        height: '60%',
        width: '5%',
        tintColor: colors.greenDark
    },
})

export default styles;
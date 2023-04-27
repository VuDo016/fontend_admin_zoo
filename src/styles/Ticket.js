import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    header: {
        height: screenHeight / 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewFlat: {
        backgroundColor: colors.mainLight3
    },
    item: {
        width: '46%',
        height: screenHeight / 5.5,
        backgroundColor: colors.text,
        marginLeft: '3%',
        marginVertical: '2%',
        paddingHorizontal: '2%',
        paddingVertical: '3.5%',
        justifyContent: 'space-between',
        borderRadius: 5
    },
    itemHead: {
        flexDirection: 'row',
        height: '65%',
        width: '100%',
        justifyContent: 'space-between',
        borderLeftWidth: 5,
        borderRadius: 2,
        paddingLeft: '7%',
        borderColor: colors.mainHome
    },
    viewImage: {
        height: '60%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greenLight,
        borderRadius: 10
    },
    imageIcon: {
        height: '50%',
        width: '50%'
    },
    viewInfo: {
        height: '100%',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.mainDark
    },
    textNumber: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black
    },
    viewVol: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textVol: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textVol1: {
        fontSize: 15,
        marginTop: '3%'
    },
    viewFoot: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '7%'
    },
    textTitleFoot: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginTop: '8%',
        marginBottom: '5%',
    },
    containerHis: {
        height: screenHeight / 7,
        width: '95%',
        flexDirection: 'row',
        backgroundColor: colors.text,
        marginVertical: '3%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: '2%'
    },
    viewAvatarHis: {
        height: '65%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: colors.greenLight
    },
    avatarHis : {
        height: '100%',
        width: '100%'
    },
    viewInfoHis: {
        height: '75%',
        width: '40%',
        justifyContent: 'space-between'
    },
    textNameHis: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    textPriceHis: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black
    },
    viewRowHis: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
    },
    viewRowHis1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%'
    },
    iconHis: {
        height: 20,
        width: 20
    },
    iconArrowHis: {
        height: '30%',
        width: '5%'
    }
})

export default styles
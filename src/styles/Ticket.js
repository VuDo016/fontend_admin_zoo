import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    ViewLoading: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textName: {
        fontSize: 17
    },
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
        height: screenHeight / 7,
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
        fontSize: 25,
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
        fontSize: 13,
        marginTop: '3%',
        color: colors.black
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
        paddingHorizontal: '5%'
    },
    viewAvatarHis: {
        height: '65%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: colors.greenLight,
        marginRight: '5%'
    },
    avatarHis : {
        height: '90%',
        width: '90%',
        borderRadius: 200
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
    textTimeAgo: {
        fontSize: 15,
        color: colors.mainHome,
        position: "absolute",
        right: '10%',
        top: '10%',
        fontWeight: '500'
    },
    viewRowHis: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%'
    },
    viewRowHis1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    iconHis: {
        height: 20,
        width: 20
    },
    iconHis1: {
        height: 25,
        width: 25
    },
    iconArrowHis: {
        height: '30%',
        width: '5%',
        marginLeft: '5%'
    },
    //////////////Manager Sale Ticket ///////////////////
    containerManager: {
        height: screenHeight / 8,
        width: '47%',
        backgroundColor: colors.text,
        marginVertical: '1%',
        marginLeft: '2%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: '2%'
    },
    itemManager: {
        flexDirection: 'row',
        height: '60%',
        width: '100%',
        alignItems: 'center'
    },
    itemManager1: {
        flexDirection: 'row',
        height: '40%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textNameManager: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    viewAvatarManager: {
        height: '70%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        marginRight: '10%',
        backgroundColor: colors.greenLight
    },
    avatarManager : {
        height: '90%',
        width: '90%',
        borderRadius: 200
    },
    iconManager: {
        height: 15,
        width: 15
    },
    iconManager1: {
        height: 20,
        width: 20
    },
    viewRowManager: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    viewRowManager1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    textPriceManager: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    iconArrowManager: {
        height: '35%',
        width: '10%'
    },
    iconArrowManager1: {
        height: '25%',
        width: '10%',
        position: 'absolute',
        right: '5%',
        top: '5%'
    },
    ///////////////////
    containerFoot: {
        height: screenHeight / 10
    },
    containerManager1: {
        height: screenHeight / 13,
        width: '95%',
        flexDirection: 'row',
        backgroundColor: colors.text,
        marginVertical: '2%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: '2%',
        marginLeft: '2%'
    },
    viewAvatarManager1: {
        height: '65%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        backgroundColor: colors.greenLight
    },
    avatarManager1 : {
        height: '90%',
        width: '90%',
        borderRadius: 200
    },
    viewTextManager1: {
        height: '100%',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNameManager1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.greenDark
    },
    textPriceManager1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    viewRowManager2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '10%'
    },
    iconArrowManager2: {
        height: '25%',
        width: '5%'
    },
})

export default styles
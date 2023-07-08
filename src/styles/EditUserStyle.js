import { StyleSheet } from "react-native"
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;
const screenWidth  = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    header: {
        height: screenHeight / 10,
        backgroundColor: colors.greenLight2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnEdit: {
        marginTop: 25,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginLeft: 15
    },
    iconEdit: {
        height: 30,
        width: 30
    },
    textTitle: {
        fontSize: 25,
        marginLeft: 20,
        color: colors.black
    },
    info: {
        backgroundColor: colors.whiteDarkLight
    },
    imageCover: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.dark
    },
    imageAvatar: {
        height: 130,
        width: 130,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.mainHome
    },
    viewChoose: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 3,
        backgroundColor: colors.text
    },
    viewChoose1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 18,
        marginBottom: 3,
        backgroundColor: colors.text
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    viewTitle: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textTitleInfo: {
        flex: 1,
        fontSize: 20,
        fontWeight: "400",
        marginVertical: 10,
        color: colors.black
    },
    textClick: {
        flex: 1,
        fontSize: 17,
        color: colors.whiteDark,
        backgroundColor: colors.whiteDarkLight,
        height: '80%',
        paddingHorizontal: 10,
        color: colors.black
    },
    textClickDate: {
        flex: 0.7,
        fontSize: 17,
        color: colors.whiteDark,
        backgroundColor: colors.whiteDarkLight,
        height: '80%',
        paddingHorizontal: 10,
        color: colors.black
    },
    container2: {
        height: 150,
        paddingHorizontal: 50,
        paddingVertical: 5
    },
    btnSubmit: {
        backgroundColor: colors.mainHome,
        borderRadius: 7,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewGender: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '53%'
    },
    viewBtnGender: {
        backgroundColor: colors.whiteDarkLight,
        borderWidth: 2,
        borderColor: colors.mainHome,
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBtnGenderNot: {
        backgroundColor: colors.text,
        borderWidth: 2,
        borderColor: colors.dark2,
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textGender: {
        fontSize: 20,
        color: colors.mainHome
    },
    textGenderNot: {
        fontSize: 20,
        color: colors.dark2
    },
    ////////////////Contact US/////////
    itemChat: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center' 
    },
    iconChat: {
        height: screenWidth / 15,
        width: screenWidth / 15,
        marginRight: '5%'
    },
    textChat: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.black
    },
    viewTextChat: {
        height: 'auto',
        marginVertical: '10%'
    },
    textInputChat: {
        borderBottomWidth: 2,
        borderColor: colors.mainDark,
        fontSize: 17,
        marginVertical: '5%',
        color: colors.black
    },
    infoChat: {
        backgroundColor: colors.whiteDarkLight,
        height: 'auto',
        width: 'auto',
        margin: '5%',
        paddingVertical: '10%',
        paddingHorizontal: '5%',
        borderWidth: 2,
        borderColor: colors.main
    }
})

export default styles
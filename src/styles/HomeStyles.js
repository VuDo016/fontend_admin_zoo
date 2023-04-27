import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight  = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        marginBottom: '25%'
    },
    backButtonIcon: {
        height: 40,
        width: 40
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    rememberMeLabel: {
        marginLeft: 10,
        fontSize: 16
    },
    button: {
        marginTop: '10%',
        height: '8%',
        width: '100%',
        backgroundColor: colors.dark,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewMid: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        left: '7%',
        top: '5%'
    },
    imageLogo: {
        height: 150,
        width: 150
    },
    textTitle: {
        fontSize: 30,
        color: colors.dark,
        fontWeight: 'bold'
    },
    textTitle1: {
        fontSize: 20,
        color: colors.mainDark
    },
    textBottom: {
        fontSize: 17,
        color: colors.mainHome,
        fontWeight: '500'
    },
    textBottom1: {
        fontSize: 17,
        color: colors.greenDark
    },
    viewBtnText: {
        position: 'absolute',
        bottom: '15%'
    },
    viewBtnText1: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '10%'
    }
})

export default styles;
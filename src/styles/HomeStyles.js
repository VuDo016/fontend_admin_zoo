import { StyleSheet } from "react-native";

import colors from "../../assets/colors/colors";


const styles= (btn) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83d804'
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    text: {
        fontSize: 33,
        color: colors.main,
        fontFamily: 'vinque rg',
        marginTop: '10%'
    },
    viewBtn: {
        height: '8%',
        width: '80%',
        backgroundColor: btn ? colors.dark : '',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: btn ? '10%' : '1%',
    },
    textBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: btn ? colors.text : colors.dark,
    },
    viewMid: {
        flexDirection: 'row',
        marginTop: '5%',
        width: '70%',
        justifyContent: 'space-between'
    },
    image: {
        height: 50,
        width: 50
    },
    textMid: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '600'
    },
    viewItem: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;
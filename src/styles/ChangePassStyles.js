import { StyleSheet } from "react-native"

import colors from "../../assets/colors/colors"

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.greenLight2,
        flexDirection: 'row',
        height: 100
    },
    iconArrow: {
        height: 20,
        width: 20,
        marginTop: 50,
        marginLeft: 15
    },
    textTitle: {
        marginTop: 42,
        fontSize: 25,
        marginLeft: 20
    },
    body: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: colors.white
    },
    viewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        fontSize: 21
    },
    inputText: {
        borderWidth: 1,
        width: '50%',
        height: 40,
        fontSize: 20,
        paddingHorizontal: 10
    },
    viewBtn: {
        marginVertical: 20,
        backgroundColor: colors.mainHome,
        paddingVertical: 15,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textBtn: {
        fontSize: 20,
        color: colors.text
    }
})

export default styles
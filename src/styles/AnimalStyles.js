import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.text
    },
    btnAdd: {
        height: screenWidth / 6,
        width: screenWidth / 6,
        backgroundColor: colors.mainHome,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.greenLight,
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        zIndex: 5
    },
    textbtnAdd: {
        color: colors.text,
        fontSize: 30,
        fontWeight: 'bold'
    },
    viewRow: {
        width: '100%',
        height: screenHeight / 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        marginVertical: '6%',
        paddingHorizontal: '5%'
    },
    textNumber: {
        fontSize: 18
    },
    viewSelec: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greenLight
    },
    viewSelecInput: {
        width: '50%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.text,
        borderWidth: 1.5,
        paddingLeft: '5%',
        borderRadius: 20,
        fontSize: 17
    },
    image: {
        height: screenWidth / 10,
        width: screenWidth / 10,
        borderRadius: 100,
        marginHorizontal: '5%'
    },
    image1: {
        height: screenWidth / 12,
        width: screenWidth / 12,
        borderRadius: 100,
        position: 'absolute',
        right: '2%',
        tintColor: colors.dark2
    },
    viewList: {
        flexDirection: 'row',
        height: screenHeight / 15,
        width: '95%',
        marginVertical: '2%',
        marginLeft: '2.5%',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderWidth: 1
    },
    textName1: {

    },
    imageEdit: {
        height: screenWidth / 4,
        width: screenWidth / 4,
        borderRadius: 10,
        margin: '2%'
    },
    imageAddImg: {
        tintColor: colors.mainHome,
        height: '50%',
        width: '50%'
    },
    horizontalContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '5%'
    },
    viewInputEdit: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginTop: '13%'
    },
    viewInputEdit1: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginTop: '7%'
    },
    textInputEdit: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    inputEdit: {
        height: '150%',
        width: '60%',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
        left: '40%',
        paddingLeft: '5%'
    },
    inputEdit1: {
        height: '150%',
        width: '40%',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
        left: '40%',
        paddingLeft: '5%'
    },
    inputEdit2: {
        height: '300%',
        textAlignVertical: "top",
        width: '60%',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
        left: '40%',
        paddingLeft: '5%'
    },
    addButton: {
        backgroundColor: colors.mainDark,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderRadius: 10,
        width: '25%',
        padding: '2%',
        marginLeft: '65%'
    },
    addButtonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: colors.mainHome,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '13%',
        borderRadius: 10,
        width: '50%',
        padding: '2%',
        marginLeft: '25%'
    },
    saveButtonText: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    texDate: {
        fontSize: 20,
        color: colors.black
    }
});

export default styles;
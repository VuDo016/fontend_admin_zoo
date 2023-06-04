import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  /////////////////TICKET/////////////
  containerTK: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: colors.mainHome,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnIconXTK: {
    position: 'absolute',
    left: '2%',
    top: '2%'
  },
  iconXTK: {
    height: screenWidth / 7,
    width: screenWidth / 7,
    tintColor: colors.text
  },
  itemTK: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
    padding: '7%',
    backgroundColor: colors.text,
    borderWidth: 5,
    borderColor: colors.phaneon
  },
  item1TK: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.mainHome,
    paddingVertical: '5%'
  },
  item2TK: {
    flex: 5.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%'
  },
  item21TK: {
    height: '60%',
    width: '100%',
    justifyContent: 'space-between'
  },
  itemInfoTK: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.mainLight3
  },
  textNoteTK: {
    color: 'red',
    fontSize: 15
  },
  textBtnTK: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500'
  },
  textBigTK: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 'bold'
  },
  viewRowinfoTK: {
    flexDirection: 'row',
    height: '100%',
    width: '47%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textinfoTK: {
    fontWeight: '500',
    fontSize: 20,
    color: colors.dark2
  },
  iconMoreTK: {
    height: 22,
    width: 22
  },
  item3TK: {
    flex: 0.7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mainDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogoTK: {
    height: screenWidth / 2,
    width: screenWidth / 2
  },
  viewListServiceTK: {
    flex: 1,
    alignItems: 'flex-end'
  },
  ////////////////////
  flastHis: {
    backgroundColor: colors.text
  },
  itemHis: {
    height: screenHeight / 7,
    width: screenWidth / 1.1,
    margin: '5%',
    borderRadius: 10,
    borderColor: colors.dark,
    borderWidth: 2,
    backgroundColor: colors.mainLight3
  },
  itemHis1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%'
  },
  viewheadHis: {
    alignItems: 'flex-end'
  },
  statusHis1: {
    height: '60%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textBigHis: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black
  },
  textTitleHis: {
    fontSize: 17,
    color: colors.black,
    fontWeight: '400'
  },
  textTitleHis1: {
    fontSize: 13,
    color: colors.dark2
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },
  modalCloseIcon: {
    width: screenWidth / 5,
    height: screenWidth / 5,
  },
  qrCodeContainerFullScreen: {
    height: screenHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '10%'
  },
  qrCodeFullScreen: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  qrCodeDateFullScreen: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  
});

export default styles;
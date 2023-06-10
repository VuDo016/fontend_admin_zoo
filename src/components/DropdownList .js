import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;

export default function Dropdown({ size, title, selectedValue, setSelectedValue, options }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenPicker = () => {
    setModalVisible(true);
  };

  const handleClosePicker = () => {
    setModalVisible(false);
  };

  const handleSelectValue = (value) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <View style={ size ? styles.viewDrop : styles.viewDrop1}>
      <TouchableOpacity style={styles.dropdownButton} onPress={handleOpenPicker}>
        <Text style={styles.selectedValueText} >
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : title}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles.optionButton}
                onPress={() => handleSelectValue(option.value)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.cancelButton} onPress={handleClosePicker}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = ({
  viewDrop: {
    position: 'absolute',
    backgroundColor: colors.text,
    height: 'auto',
    width: '60%',
    left: '40%'
  },
  viewDrop1: {
    position: 'absolute',
    backgroundColor: colors.text,
    height: 'auto',
    width: '19%',
    left: '81%'
  },
  dropdownButton: {
    height: '100%',
    width: '100%',
    padding: 10,
    borderColor: colors.black,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text,
    alignItems: 'flex-start'
  },
  selectedValueText: {
    fontSize: 16,
    color: colors.black
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 20
  },
  cancelButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  cancelButtonText: {
    fontSize: 18,
    color: 'red',
  },
});
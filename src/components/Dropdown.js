import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Dimensions } from 'react-native';

import colors from "../../assets/colors/colors";

const screenHeight = Dimensions.get('screen').height;

export default function Dropdown({ size, title, selectedValue, setSelectedValue }) {
  const [modalVisible, setModalVisible] = useState(false);

  const options = [
    { label: 'Động vật không xương sống', value: 'Động vật không xương sống' },
    { label: 'Cá', value: 'Cá' },
    { label: 'Động vật lưỡng cư', value: 'Động vật lưỡng cư' },
    { label: 'Bò sát', value: 'Bò sát' },
    { label: 'Các loài chim', value: 'Các loài chim' },
    { label: 'Động vật có vú', value: 'Động vật có vú' }
  ];

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
    <View style={styles(size).viewDrop}>
      <TouchableOpacity style={styles(size).dropdownButton} onPress={handleOpenPicker}>
        <Text style={styles(size).selectedValueText}>
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : title}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles(size).modalContainer}>
          <View style={styles(size).pickerContainer}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles(size).optionButton}
                onPress={() => handleSelectValue(option.value)}
              >
                <Text style={styles(size).optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles(size).cancelButton} onPress={handleClosePicker}>
            <Text style={styles(size).cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = (size) => ({
  viewDrop: {
    backgroundColor: colors.text,
    height: size,
    width: '100%',
  },
  dropdownButton: {
    height: '100%',
    width: '100%',
    padding: 10,
    borderColor: colors.black,
    borderRadius: 15,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text,
    alignItems: 'flex-start'
  },
  selectedValueText: {
    fontSize: 17,
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
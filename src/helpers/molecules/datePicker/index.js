import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Width, Height} from '../dimension';

const DatePicker = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.openDatePickers}
        style={styles.datePicker}>
        <Text>{props.date ? props.date : 'Enter Your DOB'}</Text>
      </TouchableOpacity>
      <DateTimePicker
        isVisible={props.isVisible}
        mode="date"
        onConfirm={props.onConfirm}
        onCancel={props.Cancel}
      />
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePicker: {
    padding: 12,
    borderWidth: 1,
    width: Width(80),
    fontSize: Height(2.2),
    borderRadius: 6,
    margin: 12,
  },
});

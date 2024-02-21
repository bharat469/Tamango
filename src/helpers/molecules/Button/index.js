import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Width, Height} from '../dimension';
import COLORS from '../color';

const Buttons = ({btnStyle, onPress, btnText, buttonName}) => {
  return (
    <TouchableOpacity
      style={btnStyle ? btnStyle : styles.btnName}
      onPress={onPress}>
      <Text style={btnText ? btnText : styles.btnText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnName: {
    backgroundColor: COLORS.PrimaryColor,
    padding: 12,
    height: Height(5),
    width: Width(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Height(2),
    borderRadius: 12,
  },
  btnText: {
    color: COLORS.secondaryColor,
    fontWeight: '700',
    fontSize: Height(1.5),
    textAlign: 'center',
  },
});

export default Buttons;

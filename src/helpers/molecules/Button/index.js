import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Buttons = props => {
  return (
    <TouchableOpacity style={props.btnStyle}>
      <Text style={props.btnText}>{props.buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
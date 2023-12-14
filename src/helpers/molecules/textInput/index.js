import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextInputs = props => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        style={props.style}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default TextInputs;

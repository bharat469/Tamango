import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../helpers/molecules/header';

const Register = ({navigation}) => {
  return (
    <View>
      <Header headerName="Register" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Register;

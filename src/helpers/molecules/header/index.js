import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../color';
import {Height} from '../dimension';

const Header = props => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={COLORS.whiteColor}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.headerName}</Text>
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondaryColor,
    padding: 15,
  },
  headerText: {
    color: COLORS.whiteColor,
    fontSize: Height(3),
  },
});

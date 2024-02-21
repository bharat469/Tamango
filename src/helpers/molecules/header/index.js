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
          color={COLORS.secondaryColor}
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
    backgroundColor: COLORS.whiteColor,
    padding: 12,
  },
  headerText: {
    color: COLORS.secondaryColor,
    fontSize: Height(1.9),
  },
});

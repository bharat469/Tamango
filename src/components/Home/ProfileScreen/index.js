import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../Auth/Login/action';
import Buttons from '../../../helpers/molecules/Button';
import {Height, Width} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const clearToken = async () => {
    // Clear the user token from AsyncStorage
    await AsyncStorage.removeItem('userToken').catch(error => {
      console.error('Error clearing user token:', error);
    });
  };

  const handleLogout = async () => {
    // Clear user token from AsyncStorage
    await clearToken();
    dispatch(deleteToken());
  };

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Buttons
        buttonName={'Logout'}
        btnStyle={styles.btnName}
        btnText={styles.btnText}
        onPress={() => handleLogout()}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  btnName: {
    backgroundColor: COLORS.PrimaryColor,
    padding: 12,
    height: Height(7),
    width: Width(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Width(15),
    marginTop: Height(2),
    borderRadius: 12,
  },
  btnText: {
    color: COLORS.whiteColor,
    fontSize: Height(2.5),
    textAlign: 'center',
  },
});

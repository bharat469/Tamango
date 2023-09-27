import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../../helpers/molecules/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Height, Width} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';

const Home = () => {
  const Logout = async () => {
    // Clear the user token from AsyncStorage
    await AsyncStorage.removeItem('userToken')
      .then(() => {
        console.log('User token cleared successfully.');
      })
      .catch(error => {
        console.error('Error clearing user token:', error);
      });
  };

  return (
    <View>
      <Text>Home</Text>
      <Buttons
        buttonName={'Logout'}
        btnStyle={styles.btnName}
        btnText={styles.btnText}
        onPress={() => Logout()}
      />
    </View>
  );
};

export default Home;

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

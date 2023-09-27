import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './authNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigation from './HomeNavigation';
const Navigation = () => {
  const [token, setToken] = useState(null);

  const GetTokenUser = async () => {
    // Retrieve the user token from AsyncStorage
    await AsyncStorage.getItem('userToken')
      .then(token => {
        if (token) {
          setToken(token);
        } else {
          // Token not found, handle the case accordingly
          console.log('User token not found.');
        }
      })
      .catch(error => {
        console.error('Error retrieving user token:', error);
      });
  };

  useEffect(() => {
    GetTokenUser();
  }, [token]);

  return (
    <NavigationContainer>
      {token ? <HomeNavigation /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

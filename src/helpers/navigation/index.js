import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './authNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigation from './HomeNavigation';
import {saveToken} from '../../components/Auth/Login/action';
import {useSelector, useDispatch} from 'react-redux';

const Navigation = props => {
  const [token, setToken] = useState(null);
  const Token = useSelector(state => state.SaveToken.token);
  const isAuthenticate = useSelector(state => state.SaveToken.isAuthenticate);

  const dispatch = useDispatch();
  const GetTokenUser = async () => {
    // Retrieve the user token from AsyncStorage
    await AsyncStorage.getItem('userToken')
      .then(token => {
        if (token) {
          console.log('akdhjah', token);
          setToken(token);
          dispatch(saveToken(token));
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
  }, [Token]);

  return (
    <NavigationContainer>
      {isAuthenticate || Token ? <HomeNavigation /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

export default Navigation;

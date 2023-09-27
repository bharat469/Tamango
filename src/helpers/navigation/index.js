import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './authNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeNavigation from './HomeNavigation';
import {connect} from 'react-redux';
import {saveToken} from '../../components/Auth/Login/action';

const Navigation = props => {
  const [token, setToken] = useState(null);
  console.log('skhdjs', props.token);

  const GetTokenUser = async () => {
    // Retrieve the user token from AsyncStorage
    await AsyncStorage.getItem('userToken')
      .then(token => {
        if (token) {
          setToken(token);
          props.saveToken(token);
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
      {props.token ? <HomeNavigation /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isSuccess: state.SaveToken.isSuccess,
  token: state.SaveToken.token,
});

const mapDispatchToProps = {
  saveToken,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

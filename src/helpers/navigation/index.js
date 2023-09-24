import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './authNavigation';
const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationStack />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

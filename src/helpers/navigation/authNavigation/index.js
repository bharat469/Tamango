import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../../components/Auth/Login';
import Register from '../../../components/Auth/register';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={LoginScreen} name="LoginScreen" />
      <AuthStack.Screen component={Register} name="RegisterScreen" />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../components/Home/home';

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen component={Home} name="HomeScreen" />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});

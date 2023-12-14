import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../components/Home/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../../components/Home/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../molecules/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MatchingScreen from '../../../components/Home/MatchingScreen';

const BottomStack = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MatchScreen') {
            iconName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'document-attach' : 'document-attach-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.PrimaryColor,
        tabBarInactiveTintColor: 'grey',
        tabBarLabel: () => null,
      })}>
      <BottomStack.Screen
        component={Home}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      <BottomStack.Screen
        component={MatchingScreen}
        name="MatchScreen"
        options={{headerShown: false}}
      />
      <BottomStack.Screen component={ProfileScreen} name="ProfileScreen" />
    </BottomStack.Navigator>
  );
};

const HomeNavigation = () => {
  return <BottomTab />;
};

export default HomeNavigation;

const styles = StyleSheet.create({});

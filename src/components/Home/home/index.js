import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../../helpers/molecules/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Height, Width} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../Auth/Login/action';
import CardStack from '../../../helpers/molecules/card';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const cardData = [
    {name: 'Tony', image: require('../../../assets/home/image1.jpg')},
    {name: 'Money', image: require('../../../assets/home/image2.jpg')},
    {name: 'Roney', image: require('../../../assets/home/image3.jpg')},
    {name: 'Poney', image: require('../../../assets/home/image4.jpg')},
    {name: 'chinki', image: require('../../../assets/home/image5.jpg')},
    // Add more card data here
  ];
  return (
    <View style={styles.HomeStyle}>
      <CardStack data={cardData} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeStyle: {
    flex: 1,
    // alignItems: 'center',
  },
});

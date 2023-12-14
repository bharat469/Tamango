import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {Height, Width} from '../dimension';

const CardStack = ({data}) => {
  const Card = ({cardData}) => {
    return (
      <View style={styles.card}>
        <Image source={cardData.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{cardData.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Swiper
        cards={data}
        renderCard={cardData => <Card cardData={cardData} />}
        infinite
        backgroundColor="transparent"
        cardHorizontalMargin={0}></Swiper>
    </View>
  );
};

export default CardStack;

const styles = StyleSheet.create({
  card: {
    width: Width('98%'),
    height: Height('98%'),
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    bottom: Height(10),
  },
  cardImage: {
    width: Width('90%'),
    height: Height('67%'),
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: Height(5),
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

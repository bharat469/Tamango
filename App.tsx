/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './src/helpers/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Pet from '../../../assets/loginImage/loginPet.png';
import styles from './styles';
import TextInputs from '../../../helpers/molecules/textInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../../helpers/molecules/Button';

const LoginScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer}>
      <Image source={Pet} style={styles.loginImage} />
      <View>
        <TextInputs
          placeholder="Enter Your Email/Username"
          style={styles.textStyle}
        />
        <TextInputs
          placeholder="Enter your Password"
          style={styles.textStyle}
          secureTextEntry={true}
        />
        <Buttons
          buttonName={'Login'}
          btnStyle={styles.btnName}
          btnText={styles.btnText}
        />
      </View>

      <View style={styles.registerView}>
        <Text style={styles.registerText}>Hi New Here!!! </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerBtn}> Kindly Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

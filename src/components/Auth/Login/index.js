import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import TextInputs from '../../../helpers/molecules/textInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../../helpers/molecules/Button';
import COLORS from '../../../helpers/molecules/color';
import {Height} from '../../../helpers/molecules/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveToken} from './action';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import LoginPet from '../../../assets/loginImage/loginPet.svg';

const LoginScreen = ({navigation, saveToken}) => {
  const [LoginData, setLoginData] = useState({
    Email: '',
    password: '',
  });

  const [error, setErrors] = useState({});
  function isValidEmail(email) {
    // Regular expression pattern to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method of the regular expression to check if the email matches the pattern
    return emailPattern.test(email);
  }

  const validateForm = () => {
    const newError = {};

    if (!LoginData.Email) {
      error.email = 'Email is required';
    } else if (!isValidEmail(LoginData.Email)) {
      newError.email = 'Invalid email format';
    }

    if (!LoginData.password) {
      newError.password = 'Password is required';
    } else if (LoginData.password.length < 6) {
      newError.password = 'Password must be at least 6 characters long';
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const UserTokenSet = async userToken => {
    // Save the token to AsyncStorage
    await AsyncStorage.setItem('userToken', userToken)
      .then(() => {
        console.log('User token saved successfully.');
        saveToken(userToken);
      })
      .catch(error => {
        console.error('Error saving user token:', error);
      });
  };
  console.log('heres');
  const onSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      auth()
        .signInWithEmailAndPassword(LoginData.Email, LoginData.password)
        .then(userToken => UserTokenSet(userToken.user.uid))
        .catch(e => console.log('error is ', e));
    } else {
      console.log('skdks', error);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer}>
      {/* <Image source={Pet} style={styles.loginImage} /> */}
      <LoginPet width={300} height={400} />
      <View>
        <TextInputs
          placeholder="Enter Your Email/Username"
          style={[
            styles.textStyle,
            error.email ? {borderColor: COLORS.RedColor, borderWidth: 2} : null,
          ]}
          onChangeText={text => setLoginData({...LoginData, Email: text})}
        />
        {error.email ? (
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.RedColor,
              fontSize: Height('2.2%'),
            }}>
            {error.email}
          </Text>
        ) : null}
        <TextInputs
          placeholder="Enter your Password"
          style={[
            styles.textStyle,
            error.password
              ? {borderColor: COLORS.RedColor, borderWidth: 2}
              : null,
          ]}
          secureTextEntry={true}
          onChangeText={text => setLoginData({...LoginData, password: text})}
          value={LoginData.password}
        />
        {error.password ? (
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.RedColor,
              fontSize: Height('2.2%'),
            }}>
            {error.password}
          </Text>
        ) : null}
        <Buttons
          buttonName={'Login'}
          btnStyle={styles.btnName}
          onPress={() => onSubmit()}
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

const mapStateToProps = state => ({
  isSuccess: state.SaveToken.isSuccess,
  data: state.SaveToken.token,
});

const mapDispatchToProps = {
  saveToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

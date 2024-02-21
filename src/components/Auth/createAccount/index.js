import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Header from '../../../helpers/molecules/header';
import LottieView from 'lottie-react-native';
import TextInputs from '../../../helpers/molecules/textInput';
import {Width, Height} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';
import Buttons from '../../../helpers/molecules/Button';

const CreateAccountScreen = ({navigation}) => {
  const [RegisterData, setRegisterData] = useState({
    Email: '',
    phoneNo: '',
    PasswordFirst: '',
    PasswordConfirm: '',
    PasswordFinal: '',
  });
  const [error, setError] = useState({});

  const checkPassWord = () => {};

  const isValidEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    let newError = {};
    if (!RegisterData.Email) {
      error.email = 'EMAIL IS REQUIRED';
    } else if (!isValidEmail(RegisterData.Email)) {
      newError.email = 'EMAIL HAS INVALID FORMAT !!!';
    }
    if (!RegisterData.PasswordFirst) {
      newError.password = 'PASSWORD MUST BE REQUIRED !!!';
    } else if (RegisterData.PasswordFirst.length < 6) {
      newError.password = 'PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG';
    }
    if (!RegisterData.phoneNo) {
      newError.phoneNumber = 'PHONE NUMBER IS REQUIRED !!!';
    } else if (RegisterData.phoneNo.length !== 10) {
      console.log('error', RegisterData.phoneNo);
      newError.phoneNumber = 'PHONE NUMBER IS WRONG KINDLY CHECK';
    }

    if (RegisterData.PasswordConfirm) {
      console.log('register password', RegisterData.PasswordConfirm);
      if (RegisterData.PasswordFirst === RegisterData.PasswordConfirm) {
        console.log('true it is');

        return setRegisterData({
          ...RegisterData,
          PasswordFinal: RegisterData.PasswordFirst,
        });
      } else {
        console.log('error in maching password');

        newError.confirmErr = 'PLEASE CHECK YOUR PASSWORD IT DID NOT MATCH!!!';
      }
    }
    setError(newError);
    console.log('hsgaig', error);
    console.log(Object.keys(newError).length, 'ajyshagsjha');
    return Object.keys(newError).length === 0;
  };

  const onSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('success');
    } else {
      console.log('error====>', error);
    }
  };

  return (
    <View style={styles.createAccountStyle}>
      <Header
        headerName="Create an Account"
        onPress={() => navigation.goBack()}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.primarySection}>
          <LottieView
            source={require('../../../assets/register/dog.json')}
            autoPlay
            loop
            style={{width: 250, height: 200}}
          />
          <View>
            <TextInputs
              placeholder="Enter Email"
              style={[
                styles.textStyle,
                error.email
                  ? {borderColor: COLORS.RedColor, borderWidth: 2}
                  : null,
              ]}
              onChangeText={value =>
                setRegisterData({...RegisterData, Email: value})
              }
            />
            {error.email ? (
              <Text style={styles.errorMessage}>{error.email}</Text>
            ) : null}

            <TextInputs
              placeholder="Enter Phone number"
              style={[
                styles.textStyle,
                error.phoneNumber
                  ? {borderColor: COLORS.RedColor, borderWidth: 2}
                  : null,
              ]}
              onChangeText={value =>
                setRegisterData({...RegisterData, phoneNo: value})
              }
            />
            {error.phoneNumber ? (
              <Text style={styles.errorMessage}>{error.phoneNumber}</Text>
            ) : null}
            <TextInputs
              placeholder="Password"
              style={[
                styles.textStyle,
                error.password
                  ? {borderColor: COLORS.RedColor, borderWidth: 2}
                  : null,
              ]}
              secureTextEntry={false}
              onChangeText={value =>
                setRegisterData({...RegisterData, PasswordFirst: value})
              }
            />
            {error.password ? (
              <Text style={styles.errorMessage}>{error.password}</Text>
            ) : null}

            <TextInputs
              placeholder="confirm Password"
              style={[
                styles.textStyle,
                error.confirmErr
                  ? {borderColor: COLORS.RedColor, borderWidth: 2}
                  : null,
              ]}
              onChangeText={value =>
                setRegisterData({...RegisterData, PasswordConfirm: value})
              }
            />
            {error.confirmErr ? (
              <Text style={styles.errorMessage}>{error.confirmErr}</Text>
            ) : null}
          </View>
          <Buttons buttonName="Register" onPress={() => onSubmit()} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  createAccountStyle: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  primarySection: {
    alignItems: 'center',
  },
  textStyle: {
    padding: 12,
    borderWidth: 1,
    width: Width(80),
    fontSize: Height(1.8),
    borderRadius: 6,
    margin: 12,
    color: COLORS.blackColor,
    borderColor: COLORS.blackColor,
  },
  errorMessage: {
    textAlign: 'center',
    color: COLORS.RedColor,
    fontSize: Height('1.6%'),
  },
});

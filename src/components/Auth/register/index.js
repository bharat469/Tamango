import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../helpers/molecules/header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from '../../../helpers/molecules/datePicker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from '../../../helpers/molecules/ImageModal';
import styles from './styles';
import COLORS from '../../../helpers/molecules/color';
import {Width} from '../../../helpers/molecules/dimension';
import TextInputs from '../../../helpers/molecules/textInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Buttons from '../../../helpers/molecules/Button';

const Register = ({navigation}) => {
  const [isVisible, setIsvisible] = useState(false);
  const [Date, setDate] = useState('');
  const [imageView, setImageView] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const [registerData, setRegisterData] = useState({
    Fname: '',
    Lname: '',
    Nname: '',
    Email: '',
    password: '',
    DOB: '',
    Image: '',
    Gender: '',
  });

  const [error, setError] = useState({});

  const items = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const hideDatePicker = () => {
    setIsvisible(false);
  };

  const handleConfirm = date => {
    const isoDate = date;

    // Create a Date object from the ISO string
    const dates = moment(isoDate);

    // Get the individual components (day, month, year)
    const formattedDate = dates.format('DD/MM/YYYY');

    setDate(formattedDate);
    setRegisterData({...registerData, DOB: formattedDate});
    hideDatePicker();
  };
  const showPicker = () => {
    setIsvisible(true);
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageView(false);
      setProfileImage(image?.path);
      setRegisterData({...registerData, Image: image?.path});
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageView(false);
      setProfileImage(image?.path);
      setRegisterData({...registerData, Image: profileImage});
    });
  };
  function isValidEmail(email) {
    // Regular expression pattern to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method of the regular expression to check if the email matches the pattern
    return emailPattern.test(email);
  }

  const validateForm = () => {
    const newError = {};

    if (!registerData.Email) {
      error.email = 'Email is required';
    } else if (!isValidEmail(registerData.Email)) {
      newError.email = 'Invalid email format';
    }

    if (!registerData.Fname) {
      newError.firstName = 'First Name is required';
    }

    if (!registerData.Lname) {
      newError.LastName = 'Last Name is required';
    }
    if (!registerData.Nname) {
      newError.NickName = 'Nick Name is required';
    }

    if (!registerData.password) {
      newError.password = 'Password is required';
    } else if (registerData.password.length < 6) {
      newError.password = 'Password must be at least 6 characters long';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const onSubmit = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log('SKHJSK', registerData);
      navigation.navigate('LoginScreen');
    } else {
      console.log('error', error);
    }
  };

  const selectGender = item => {
    setSelectedValue(item);
    setRegisterData({...registerData, Gender: item});
  };

  return (
    <View style={{flex: 1}}>
      <Header headerName="Register" onPress={() => navigation.goBack()} />

      <KeyboardAwareScrollView contentContainerStyle={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => setImageView(true)}
          style={styles.profilePicView}>
          {profileImage ? (
            <Image source={{uri: profileImage}} style={styles.imageStyle} />
          ) : (
            <View style={styles.profileStyle}>
              <FontAwesome
                name="user-circle-o"
                size={94}
                color={COLORS.PrimaryColor}
              />
              <Ionicons
                name="add-circle"
                size={24}
                color={COLORS.whiteColor}
                right={Width('12%')}
              />
            </View>
          )}
        </TouchableOpacity>
        <TextInputs
          placeholder={'Enter your first name'}
          style={styles.textStyle}
          onChangeText={text => setRegisterData({...registerData, Fname: text})}
        />
        <TextInputs
          placeholder={'Enter your last name'}
          style={styles.textStyle}
          onChangeText={text => setRegisterData({...registerData, Lname: text})}
        />
        <TextInputs
          placeholder={'Enter your nick name'}
          style={styles.textStyle}
          onChangeText={text => setRegisterData({...registerData, Nname: text})}
        />
        <TextInputs
          placeholder={'Enter your Email'}
          style={styles.textStyle}
          onChangeText={text => setRegisterData({...registerData, Email: text})}
        />
        <TextInputs
          placeholder={'Enter your Password'}
          style={styles.textStyle}
          onChangeText={text =>
            setRegisterData({...registerData, password: text})
          }
        />

        <DatePicker
          date={Date}
          isVisible={isVisible}
          onConfirm={handleConfirm}
          Cancel={hideDatePicker}
          openDatePickers={showPicker}
        />
        <DropDownPicker
          open={open}
          setOpen={() => setOpen(!open)}
          items={items}
          value={selectedValue}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          itemStyle={styles.dropdownItem}
          labelStyle={styles.dropdownLabel}
          setValue={item => selectGender(item)}
          maxHeight={200}
          autoScroll
          placeholder="whats your gender??"
        />
      </KeyboardAwareScrollView>
      <View style={{alignItems: 'center'}}></View>
      <Buttons
        buttonName={'Submit'}
        btnStyle={styles.btnName}
        btnText={styles.btnText}
        onPress={() => onSubmit()}
      />
      <ImageModal
        isVisible={imageView}
        onBackdropPress={() => setImageView(false)}
        gallery={() => openGallery()}
        cameraOpen={() => openCamera()}
      />
    </View>
  );
};

export default Register;

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../color';
import {Height, Width} from '../dimension';

const ImageModal = props => {
  return (
    <Modal
      style={{flex: 1, alignItems: 'center', top: 22}}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}>
      <View style={styles.modalContainer}>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>
            Choose Your Image from Camera or Gallery
          </Text>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity onPress={props.cameraOpen}>
            <Entypo name="camera" size={54} color={COLORS.PrimaryColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.gallery}>
            <Entypo
              name="folder-images"
              size={54}
              color={COLORS.PrimaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.whiteColor,
    width: Width('99%'),
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',

    height: Height('30%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Width('99%'),
  },
  textView: {
    marginTop: Height('2%'),
    padding: 22,
  },
  textStyle: {
    fontSize: Height('2%'),
    color: COLORS.secondaryColor,
    fontWeight: '700',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
});

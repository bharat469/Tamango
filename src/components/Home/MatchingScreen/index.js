import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../helpers/molecules/header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import {BreedList, PetCategory} from './constantArray';
import {Width, Height} from '../../../helpers/molecules/dimension';
import TextInputs from '../../../helpers/molecules/textInput';

const MatchingScreen = ({navigation}) => {
  const [openDorpdown, setOpenDropdown] = useState({
    petList: false,
    breedOpen: false,
  });
  const [data, setData] = useState({
    category: '',
    nickname: '',
    age: '',
    breed: '',
    sterilisationStatus: '',
    areaOfStay: '',
    traits: [],
    likes: '',
    dislikes: '',
    displayPhotos: [],
  });

  const [breedList, setBreedList] = useState(BreedList);

  const SelectBreed = () => {
    if (data.category) {
      const filteredBreeds =
        BreedList.find(category => category.value === data.category)?.breeds ||
        [];
      setBreedList(filteredBreeds);
    } else {
      return null;
    }
  };

  useEffect(() => {
    SelectBreed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.category]);

  return (
    <View style={{flex: 1}}>
      <Header headerName="Pet Register" onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View>
          <DropDownPicker
            placeholder="Pet Category"
            items={PetCategory}
            open={openDorpdown.petList}
            setOpen={() =>
              setOpenDropdown({
                ...openDorpdown,
                petList: !openDorpdown.petList,
              })
            }
            value={data.category}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            labelStyle={styles.dropdownLabel}
            setValue={item => {
              if (typeof item === 'function') {
                const selectedValue = item();
                setData({...data, category: selectedValue});
              } else {
                setData({...data, category: item.value});
              }
            }}
            maxHeight={200}
            autoScroll
            zIndex={999}
          />
        </View>

        <TextInputs
          placeholder={'Enter Your Pet Name'}
          style={styles.textStyle}
        />
        <TextInputs
          placeholder={'Enter Your Pets Age'}
          style={styles.textStyle}
          keyboardType={'number-pad'}
        />

        <View>
          <DropDownPicker
            placeholder="Please Select Breed"
            items={breedList}
            open={openDorpdown.breedOpen}
            setOpen={() =>
              setOpenDropdown({
                ...openDorpdown,
                breedOpen: !openDorpdown.breedOpen,
              })
            }
            value={data.breed}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            labelStyle={styles.dropdownLabel}
            setValue={item => {
              if (typeof item === 'function') {
                const selectedValue = item();
                setData({...data, breed: selectedValue});
              } else {
                setData({...data, breed: item.value});
              }
            }}
            maxHeight={200}
            autoScroll
            disabled={!data.category}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MatchingScreen;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fafafa',
    width: Width('80%'),
    alignItems: 'center',
    marginTop: Width('6%'),
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    width: Width('60%'),
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#000',
  },
  textStyle: {
    padding: 12,
    borderWidth: 1,
    width: Width('80%'),
    fontSize: Height(2.2),
    borderRadius: 6,
    margin: 12,
  },
});

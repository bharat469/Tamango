import {StyleSheet} from 'react-native';
import {Height, Width} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';

const styles = StyleSheet.create({
  profilePicView: {
    padding: 22,
  },
  imageStyle: {
    width: Width('37%'),
    height: Height('19%'),
    borderRadius: 50,
    borderWidth: 5,
    borderColor: COLORS.secondaryColor,
  },
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textStyle: {
    padding: 12,
    borderWidth: 1,
    width: Width(80),
    fontSize: Height(2.2),
    borderRadius: 6,
    margin: 12,
  },
  dropdownContainer: {
    width: Width(80),
    margin: 12,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#333',
  },
  btnName: {
    backgroundColor: COLORS.PrimaryColor,
    padding: 12,
    height: Height(7),
    width: Width(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Width(10),
    marginTop: Height(2),
    borderRadius: 12,
  },
  btnText: {
    color: COLORS.whiteColor,
    fontSize: Height(2.5),
    textAlign: 'center',
  },
});

export default styles;

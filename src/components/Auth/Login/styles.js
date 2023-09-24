import {StyleSheet} from 'react-native';
import {Height, Width} from '../../../helpers/molecules/dimension';
import COLORS from '../../../helpers/molecules/color';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
    alignItems: 'center',
  },
  loginImage: {
    width: Width(80),
    height: Height(40),
  },
  textStyle: {
    padding: 12,
    borderWidth: 1,
    width: Width(80),
    fontSize: Height(2.2),
    borderRadius: 6,
    margin: 12,
  },
  btnName: {
    backgroundColor: COLORS.PrimaryColor,
    padding: 12,
    height: Height(7),
    width: Width(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Width(15),
    marginTop: Height(2),
    borderRadius: 12,
  },
  btnText: {
    color: COLORS.whiteColor,
    fontSize: Height(2.5),
    textAlign: 'center',
  },
  registerView: {
    flexDirection: 'row',
    margin: 12,
  },
  registerText: {
    color: COLORS.secondaryColor,
    fontSize: Height(2.3),
    fontWeight: '700',
  },
  registerBtn: {
    color: COLORS.PrimaryColor,
    fontSize: Height(2.5),
    fontWeight: '800',
  },
});

export default styles;

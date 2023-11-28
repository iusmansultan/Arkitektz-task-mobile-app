import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../helpers/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('90%'),
    height: 50,
    borderRadius: 7,
    paddingHorizontal: 13,
    backgroundColor: COLORS.TEXT_INPUT_BACKGROUND,
    gap: 10,
  },
  input: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '500',
    width: '85%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
  },
  visibilityIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;

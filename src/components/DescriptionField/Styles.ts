import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../helpers/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('90%'),
    height: 170,
    borderRadius: 7,
    paddingHorizontal: 13,
    backgroundColor: COLORS.TEXT_INPUT_BACKGROUND,
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'top',
  },

});

export default styles;

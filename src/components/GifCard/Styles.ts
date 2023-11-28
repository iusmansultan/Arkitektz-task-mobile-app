import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONTFAMILY, COLORS, FONTSIZES} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  card: {
    width: wp('90%'),
    height: hp('20%'),
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
  },
  title: {
    fontSize: getFontSize(14),
    fontFamily: FONTFAMILY.SEMIBOLD,
    color: COLORS.BLACK,
  },
  gif: {
    width: '100%',
    height: hp('15%'),
    borderRadius: 10,
  },
});

export default styles;

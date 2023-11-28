import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZES} from './Colors';
import {getFontSize} from '../utils/GetFontSize';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const commonStyles = StyleSheet.create({
  sWidth: {
    width: widthPercentageToDP('90%'),
  },
  dFlexCenterCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dFlexStartCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  dFlexEndCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  dFlexBetweenCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dFlexCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dFlexStartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dFlexEndRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  dFlexBetweenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationHeaderTitle: {
    color: COLORS.BLACK,
    fontFamily: FONTFAMILY.MEDIUM,
    fontSize: getFontSize(FONTSIZES.SCREEN_TEXT),
  },
  navigationBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // marginTop: Platform.OS === 'ios' ? 0 : 2,
  },
  marginLeft: {
    marginLeft: 15,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  heading: {
    fontSize: getFontSize(FONTSIZES.SCREEN_SUB_HEADING),
    fontFamily: FONTFAMILY.SEMIBOLD,
    color: COLORS.COLOR_PRIMARY,
  },
  subHeading: {
    fontSize: getFontSize(FONTSIZES.SCREEN_TEXT),
    fontFamily: FONTFAMILY.REGULAR,
    color: COLORS.BLACK,
  },
  gap10: {
    gap: 10,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mt5: {
    marginTop: 5,
  },
  validationErrorsText: {
    color: COLORS.RED,
    fontSize: getFontSize(FONTSIZES.SCREEN_TEXT_LOW),
    fontFamily: FONTFAMILY.REGULAR,
  },
  screenHeaderContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,

  },
  screenHeaderText: {
    fontSize: getFontSize(15),
    fontFamily: FONTFAMILY.MEDIUM,
    color: COLORS.BLACK,
  },
});

export default commonStyles;

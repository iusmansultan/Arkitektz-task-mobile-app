import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONTFAMILY, COLORS, FONTSIZES} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.WHITE,
    padding: wp('4%'),
  },
  header: {
    height: hp('5%'),
  },
  logo: {
    width: '100%',
    height: hp('5%'),
    resizeMode: 'contain',
  },
  searchContainer: {
    width: wp('90%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 100,
    marginTop: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    width: '80%',
    fontSize: getFontSize(14),
    fontFamily: FONTFAMILY.MEDIUM,
    color: COLORS.BLACK,
    height: 30,
    padding: 0,
  },
  flatList: {
    width: wp('90%'),
    marginTop: 10,
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor:COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Indicator: {
    flex: 1,
    backgroundColor: 'rgba(235, 235, 235, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default styles;

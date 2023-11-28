import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FONTFAMILY, COLORS} from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18181A',
    padding: wp('4%'),
  },
  gif: {
    width: 300, // Set your desired width
    height: 300, // Set your desired height
  },
});

export default styles;

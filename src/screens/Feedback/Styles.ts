import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY} from '../../helpers/Colors';
import {getFontSize} from '../../utils/GetFontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  feedbackField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    height: 200,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 52,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: getFontSize(16),
    fontFamily: FONTFAMILY.MEDIUM,
  },
});

export default styles;

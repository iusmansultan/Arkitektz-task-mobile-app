import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';

import {COLORS} from '../../helpers/Colors';

type InputFieldProps = {
  placeholderText: string;
  onChange: (text: string) => void;
  isSecureText?: boolean;
  value?: string;
  forwordRef?: any;
  isShowIcon: boolean;
  icon: any;
};

const InputField: React.FC<InputFieldProps> = ({
  placeholderText,
  onChange,
  isSecureText = false,
  value,
  forwordRef,
  isShowIcon,
  icon,
}) => {
  const [isShow, setIshow] = useState<boolean>(true);

  const togglePasswordVisibilty = () => {
    setIshow(!isShow);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        commonStyles.dFlexBetweenRow,
        commonStyles.mt10,
      ]}>
      <TextInput
        ref={forwordRef}
        placeholder={placeholderText}
        placeholderTextColor={COLORS.PLACEHOLDERTEXT}
        onChangeText={(text: string) => onChange(text)}
        style={styles.input}
        secureTextEntry={isSecureText ? isShow : false}
        autoCapitalize="none"
        value={value}
      />

      <Image
        source={icon}
        style={styles.visibilityIcon}
      />
    </View>
  );
};

export default InputField;

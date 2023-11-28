import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';

import {COLORS} from '../../helpers/Colors';

type InputFieldProps = {
  placeholderText: string;
  onChange: (text: string) => void;
  value?: string;
};

const DescriptionField: React.FC<InputFieldProps> = ({
  placeholderText,
  onChange,
  value,
}) => {


  return (
    <View
      style={[
        styles.inputContainer,
        commonStyles.dFlexBetweenRow,
        commonStyles.mt10,
      ]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={COLORS.PLACEHOLDERTEXT}
        onChangeText={(text: string) => onChange(text)}
        style={styles.input}
        autoCapitalize="none"
        value={value}
        multiline
        numberOfLines={6}
      />

    </View>
  );
};

export default DescriptionField;

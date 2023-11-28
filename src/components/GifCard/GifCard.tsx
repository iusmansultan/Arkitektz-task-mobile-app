import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {ROUTES_NAME} from '../../helpers/RoutesName';

const GifCard = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTES_NAME.FEEDBACK, {item});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <FastImage
        style={styles.gif}
        source={{
          uri: item?.images.downsized.url,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};

export default GifCard;

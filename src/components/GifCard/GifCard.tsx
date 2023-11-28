import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import FastImage from 'react-native-fast-image';

const GifCard = ({item}) => {
  return (
    <View style={styles.card}>
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
    </View>
  );
};

export default GifCard;

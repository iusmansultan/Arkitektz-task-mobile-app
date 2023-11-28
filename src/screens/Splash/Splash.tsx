import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {ROUTES_NAME} from '../../helpers/RoutesName';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate(ROUTES_NAME.HOME);
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <TapGestureHandler>
        <FastImage
          style={styles.gif}
          source={require('../../assets/images/logo.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TapGestureHandler>
    </SafeAreaView>
  );
};

export default Splash;

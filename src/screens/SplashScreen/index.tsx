import React from 'react';
import {ImageBackground, View, StatusBar} from 'react-native';
import styles from './style';
import {SplashScreenProps} from '../../types';
import {background, app_logo} from '../../assets';
import {LocalSvg} from 'react-native-svg';

const SplashScreen = (props: SplashScreenProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        <LocalSvg
          asset={app_logo}
          onPress={() => navigation.navigate('Login')}
          width={200}
          height={200}
          style={styles.logo}
        />
      </ImageBackground>
    </View>
  );
};
export default {componen: SplashScreen};

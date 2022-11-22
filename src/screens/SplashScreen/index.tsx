import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './style';
import Logo from '../../assets/AppLogo';
const background = './../../assets/background.jpg';

const SplashScreen = (_props: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(background)}
        resizeMode="cover"
        style={styles.background}>
        <Logo />
      </ImageBackground>
    </View>
  );
};
export default {componen: SplashScreen, title: 'Splash'};

import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {background, app_logo} from '../../assets';
import {LoginScreenProps} from '../../types';
import styles from './style';

const LoginScreen = (_props: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        <LocalSvg
          asset={app_logo}
          width={200}
          height={200}
          style={styles.logo}
        />
        <View style={styles.captionContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
          <Text style={styles.captionText}>
            Do meditation. Stay focused. Live a healthy life.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default {componen: LoginScreen, title: 'Login'};

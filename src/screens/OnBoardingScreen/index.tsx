import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {background, app_logo} from '../../assets';
import {OnBoardingScreenProps} from '../../types';
import styles from './style';

const OnBoardingScreen = (props: OnBoardingScreenProps) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.logoContainer}>
          <LocalSvg
            asset={app_logo}
            width={200}
            height={200}
            style={styles.logo}
          />
        </View>

        <View style={styles.captionContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
          <Text style={styles.captionText}>
            Do meditation. Stay focused. Live a healthy life.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            Login With Email
          </Button>
          <Text style={styles.text}>Don’t have an account? Sign Up</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default {componen: OnBoardingScreen, title: 'Login'};

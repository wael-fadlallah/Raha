import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const SplashScreen = (props: any) => {
  const {navigation} = props;
  return (
    <View>
      <Text>Splash</Text>

      <Button onPress={() => navigation.navigate('Login')}>Spank</Button>
    </View>
  );
};
export default {componen: SplashScreen, title: 'Splash'};

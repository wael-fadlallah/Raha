import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';

const LoginScreen = (props: any) => {
  const {navigation} = props;
  return (
    <View>
      <Text>Login</Text>

      <Button onPress={() => navigation.pop()}>Spank</Button>
    </View>
  );
};

export default {componen: LoginScreen, title: 'Login'};

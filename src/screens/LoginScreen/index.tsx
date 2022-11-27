import React from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {LoginScreenProps} from '../../types';
import getStyles from './style';
import {app_logo, background_shape} from '../../assets';
import {LocalSvg} from 'react-native-svg';

function LoginScreen(props: LoginScreenProps) {
  const {navigation} = props;
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <LocalSvg
        asset={background_shape}
        style={{position: 'absolute', bottom: 0, end: 0}}
      />
      <View>
        <LocalSvg asset={app_logo} width={43} height={49} style={styles.logo} />

        <Text style={styles.signInLabel}>Sign In</Text>

        <Text style={styles.signInDesc}>
          Sign in now to acces your excercises and saved music.
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            mode="flat"
            label={<Text style={styles.inputLabel}>Email Address</Text>}
            textColor="#FFFFFF"
            style={styles.inputStyle}
          />
          <TextInput
            mode="flat"
            secureTextEntry={true}
            textContentType="password"
            label={<Text style={styles.inputLabel}>Password</Text>}
            textColor="#FFFFFF"
            style={styles.inputStyle}
          />
          <Text style={styles.fotgotPasswordLabel} onPress={() => {}}>
            Forgot Password?
          </Text>

          <Button
            mode="contained"
            style={styles.loginBtn}
            labelStyle={styles.btnLabel}>
            Login
          </Button>

          <Text style={styles.text}>
            Don’t have an account?
            <Text onPress={() => navigation.navigate('SignUp')}> Sign Up </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

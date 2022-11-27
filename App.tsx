import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export type RootStackParamList = {
  Splash: undefined;
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'transparentModal'}}
      initialRouteName="Splash">
      <Stack.Screen name={'Splash'} component={Splash.componen} />
      <Stack.Screen name={'OnBoarding'} component={OnBoardingScreen.componen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
export default App;

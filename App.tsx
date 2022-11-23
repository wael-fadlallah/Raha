import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/SplashScreen';
import Login from './src/screens/LoginScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'transparentModal'}}>
      <Stack.Screen name={'Splash'} component={Splash.componen} />
      <Stack.Screen name={'Login'} component={Login.componen} />
    </Stack.Navigator>
  );
};
export default App;

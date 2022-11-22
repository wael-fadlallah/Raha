import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/SplashScreen';
import Login from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Splash.title} component={Splash.componen} />
      <Stack.Screen name={Login.title} component={Login.componen} />
    </Stack.Navigator>
  );
};
export default App;

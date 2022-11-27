import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import getStyle from './style';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';

const DrawerComponent = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerShown: true}}>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function MainScreen() {
  const theme = useTheme();
  const styles = getStyle(theme);

  return (
    <View style={styles.container}>
      <DrawerComponent />
      <Text>Test</Text>
    </View>
  );
}

export default MainScreen;

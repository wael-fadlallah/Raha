import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import getStyle from './style';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../HomeScreen';

const DrawerComponent = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
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
    </View>
  );
}

export default MainScreen;

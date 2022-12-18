import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import getStyle from './style';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import PlayerScreen from '../PlayerScreen';

export type DrawerStackParamList = {
  Home: undefined;
  Player: undefined;
};
const DrawerComponent = () => {
  const theme = useTheme();
  const Drawer = createDrawerNavigator<DrawerStackParamList>();

  const drawerConfig = {
    headerShown: false,
    drawerActiveBackgroundColor: theme.colors.onSurface,
    drawerActiveTintColor: theme.colors.secondary,
    drawerStyle: {backgroundColor: theme.colors.primary},
  };
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={drawerConfig}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Player" component={PlayerScreen} />
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

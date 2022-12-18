/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import theme from './src/theme';
import {useFlipper} from '@react-navigation/devtools';
const Main = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
};
AppRegistry.registerComponent(appName, () => Main);

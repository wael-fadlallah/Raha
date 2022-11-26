/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import theme from './theme';

const Main = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);

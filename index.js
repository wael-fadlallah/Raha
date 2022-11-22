/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const Main = () => (
  <PaperProvider>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);

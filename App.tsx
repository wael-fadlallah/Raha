import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
      <Button
        icon={'camera'}
        mode="contained"
        onPress={() => console.log('Harder daddy')}>
        Spank me
      </Button>
    </SafeAreaView>
  );
};

export default App;

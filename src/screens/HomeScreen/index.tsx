import React from 'react';
import {View, Text} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {HomeScreenProps} from '../../types';
import getStyles from './style';

export default (props: HomeScreenProps) => {
  const {navigation} = props;
  const styles = getStyles(useTheme());
  return (
    <View style={styles.container}>
      <Text>index</Text>

      <Button mode="contained" onPress={() => navigation.toggleDrawer()}>
        Click
      </Button>
    </View>
  );
};

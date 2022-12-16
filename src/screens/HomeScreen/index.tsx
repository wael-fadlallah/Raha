import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {HomeScreenProps} from '../../types';
import getStyles from './style';
import Header from '../../components/header';

export default (_props: HomeScreenProps) => {
  const styles = getStyles(useTheme());

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

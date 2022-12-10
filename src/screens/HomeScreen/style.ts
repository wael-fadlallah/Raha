import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

export default (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
  });

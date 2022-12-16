import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      marginTop: 36,
    },
    logo: {width: 35, height: 35},
  });

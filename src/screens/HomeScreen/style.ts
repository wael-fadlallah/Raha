import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

export default (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary,
    },
    cardsContainer: {
      marginTop: 27,
      marginBottom: 23,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    card: {
      width: 62,
      height: 65,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

export default (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
    },
    trackImage: {
      marginBottom: 27,
      marginTop: 47,
    },
    trackName: {fontSize: 35},
    trackAuthor: {fontSize: 25, color: theme.colors.tertiary},
    trackControlsContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: 36,
    },
  });

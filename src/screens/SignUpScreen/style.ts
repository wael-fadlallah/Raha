import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

export default (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary,
      paddingHorizontal: 27,
      justifyContent: 'center',
    },
    logo: {marginBottom: 30},
    signInLabel: {fontSize: 30, marginBottom: 5},
    signInDesc: {color: '#FFFFFF70', fontSize: 22},
    formContainer: {marginVertical: 20},
    inputStyle: {backgroundColor: '#FFFFFF00'},
    inputLabel: {color: '#BEC2C2'},
    fotgotPasswordLabel: {
      alignSelf: 'flex-end',
      marginTop: 10,
      fontSize: 14,
      color: '#BEC2C2',
    },
    loginBtn: {marginTop: 30},
    btnLabel: {
      fontSize: 20,
      paddingVertical: 5,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 18,
      alignSelf: 'center',
    },
  });

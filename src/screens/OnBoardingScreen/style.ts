import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {flex: 1, justifyContent: 'space-evenly'},
  logoContainer: {flex: 2, justifyContent: 'flex-end'},
  logo: {alignSelf: 'center'},
  captionContainer: {
    flex: 1,
    alignItems: 'center',
    width: '75%',
    alignSelf: 'center',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
  captionText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {flex: 1, alignItems: 'center'},
  button: {borderRadius: 10, width: '70%'},
  text: {color: 'white', fontWeight: 'bold', marginTop: 18},
});

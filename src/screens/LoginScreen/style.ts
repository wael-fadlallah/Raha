import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {flex: 1, justifyContent: 'center'},
  logo: {alignSelf: 'center'},
  captionContainer: {
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
});

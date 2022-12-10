import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Splash'
>;

export type OnBoardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoarding'
>;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUp'
>;

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Main'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

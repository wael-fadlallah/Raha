import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParamList} from '../App';
import {DrawerStackParamList} from './screens/MainScreen';

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

export type PlayerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;

export type HomeScreenProps = DrawerScreenProps<DrawerStackParamList, 'Home'>;

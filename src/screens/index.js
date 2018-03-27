import { Navigation } from 'react-native-navigation';
import LoginScreen from './loginScreen/LoginScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('shl.LoginScreen', () => LoginScreen);
//   Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
//   Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}

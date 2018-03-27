/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import LoginScreen from "./src/screens/loginScreen/LoginScreen";
import { registerScreens } from './src/screens';

registerScreens(); // this is where you register all of your app's screens


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "shl.LoginScreen",
    // title: "Login"
  }
});
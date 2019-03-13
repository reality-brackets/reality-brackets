import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import MainTabNavigator from './MainTabNavigator';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async() => {
    const userToken = await AsyncStorage.getItem('userToken');

  }
}

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

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

//import authstack screens here
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'

const AuthStack = createStackNavigator({ SignUp: SignUpScreen, Login: LoginScreen});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: MainTabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

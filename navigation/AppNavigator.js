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
import {authorize} from '../config/firebase'

import MainTabNavigator from './MainTabNavigator';

//import authstack screens here
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

const AuthStack = createStackNavigator({ SignUp: SignUpScreen, Login: LoginScreen, ForgotPassword: ForgotPasswordScreen});

class AuthLoadingScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this._bootstrapAsync();
  // }

  componentDidMount(){
    authorize.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    })
  }

  // _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  // };

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

import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShowsScreen from '../screens/ShowsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import LiveScreen from '../screens/LiveScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const ShowsStack = createStackNavigator({
  Shows: ShowsScreen,
});

ShowsStack.navigationOptions = {
  tabBarLabel: 'Shows',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}
    />
  ),
};

const NotificationsStack = createStackNavigator({
  Notifications: NotificationsScreen,
});

NotificationsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};

const LiveStack = createStackNavigator({
  Live: LiveScreen,
});

LiveStack.navigationOptions = {
  tabBarLabel: 'Live',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-thunderstorm' : 'md-thunderstorm'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ShowsStack,
  NotificationsStack,
  LiveStack,
});

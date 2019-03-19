import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { authorize } from '../config/firebase';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount(){
    const {currentUser} = authorize
    this.setState({currentUser})
  }

  render() {
    const { currentUser } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

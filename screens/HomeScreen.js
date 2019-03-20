import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { authorize } from '../config/firebase';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      errorMessage: null
    };
  }

  componentDidMount(){
    const {currentUser} = authorize
    this.setState({currentUser})
  }

  handleLogout = () => {
    authorize.signOut()
    .then(() => this.props.navigation.navigate('Auth'))
    .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    const { currentUser } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <Button title="Logout" onPress={this.handleLogout} />
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

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { authorize } from '../config/firebase';

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleForgotPassword = () => {
    const {email} = this.state
    authorize.sendPasswordResetEmail(email)
    .then(() => this.props.navigation.navigate('Login'))
    .catch(error => this.setState({ errorMessage: error.message}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot Password</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Button title="Reset Password" onPress={this.handleForgotPassword} />
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

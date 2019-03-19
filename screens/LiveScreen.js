import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class LiveScreen extends React.Component {
  static navigationOptions = {
    title: 'Live',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoShowsView and replace it with your
         * content, we just wanted to provide you with some helpful Shows */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

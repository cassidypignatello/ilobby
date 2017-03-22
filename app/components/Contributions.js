import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class Contributions extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Contributions data is displayed here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
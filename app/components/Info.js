import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h4 style={styles.info}>Info blurb goes here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
    textAlign: 'center',
    marginTop: 80
  }
});
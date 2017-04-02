import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Bill extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bill details go here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80
  }
});
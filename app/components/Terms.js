import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class Terms extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.terms}>Terms of Service and verbose legalese goes here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  terms: {
    textAlign: 'center',
    margin: 80
  }
});
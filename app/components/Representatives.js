import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class Representatives extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Representatives data is returned here!</Text>
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
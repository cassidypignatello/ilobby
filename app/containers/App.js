import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import LoginForm from '../components/LoginForm'
import HomeButtons from '../components/HomeButtons'

export default class iLobby extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.welcome}>
          iLobby
        </Text>
        <Text h4 style={styles.title}>
          Crowdfunding Legislation
        </Text>
        <LoginForm/>
        <HomeButtons/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    textAlign: 'center',
    margin: 20
  },
  title: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
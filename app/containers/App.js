import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import Router from 'react-native-simple-router'
import Home from '../components/Home'

export default class iLobby extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        statusBarColor='black'
        hideNavigationBar={true}
      />
    );
  }
}

const firstRoute = {
  name: 'iLobby',
  component: Home
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});
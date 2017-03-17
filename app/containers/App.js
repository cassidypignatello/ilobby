import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../components/Login'
import About from '../components/About'
import Info from '../components/Info'

export default class iLobby extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="about" component={About} title="Who We Are" />
          <Scene key="info" component={Info} title="Why You Should Care" />
          <Scene key="login" component={Login} title="iLobby" initial={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  
});
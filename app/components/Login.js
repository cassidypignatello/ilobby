import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import LoginForm from '../components/LoginForm'
import HomeButtons from '../components/HomeButtons'
import TabBar from '../components/TabBar'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text h4 style={styles.welcome}>
            Crowdfunding Legislation
          </Text>
          <LoginForm/>
          <HomeButtons/>  
        <TabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',    
  },
  welcome: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10
  },
});
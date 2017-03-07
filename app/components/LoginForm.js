'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'


export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          containerStyle={styles.loginFields} 
          placeholder='Please enter your username...'
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          containerStyle={styles.loginFields} 
          placeholder='Please enter your password...'
        />
        <Button
          raised
          icon={{name: 'done'}}
          title='Login'
          backgroundColor='steelblue'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  loginFields: {
    width: 250, 
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
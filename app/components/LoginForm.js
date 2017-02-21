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
          containerStyle={styles.userContainer} 
          inputStyle={styles.userInput}
          placeholder='Please enter your username'
          />
        <Button
          raised
          icon={{name: 'cached'}}
          title='Login' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userContainer: {
    width: 250, 
    height: 50, 
    borderWidth: 1
  },
  userInput: {
    textAlign: 'center'
  }
});
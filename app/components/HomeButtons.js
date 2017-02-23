'use strict';

import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'people'}}
          title="Who We Are"
        />
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'info'}}
          title="Why You Should Care"
        />
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'help'}}
          title="Terms of Service"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginBottom: 10,
    backgroundColor: 'green'
  }
});



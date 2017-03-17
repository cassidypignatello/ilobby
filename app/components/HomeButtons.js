import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class HomeButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'people'}}
          title="Who We Are"
          onPress={Actions.about}
        />
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'info'}}
          title="Why You Should Care"
          onPress={Actions.info}
        />
        <Button
          raised
          buttonStyle={styles.button}
          icon={{name: 'help'}}
          title="Terms of Service"
          onPress={Actions.terms}
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



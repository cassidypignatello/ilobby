import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          If money is speech, than most of the electorate has no meaningful voice in our government. As this fact becomes ever more apparent amongst our society, iLobby is launching to capitalize on this realization and provide a solution before apathy can wage an even more destructive toll on our civics process. iLobby will provide a mobile platform that gives the electorate an opportunity to pool together their resources to promote legislation at the municipal, state, and federal level.
        </Text>
        <Text style={styles.title}>          
          While gerrymandering and well financed lobbyists on K Street routinely outmaneuver the will of the majority, iLobby will become the vehicle that American electorate at large can leverage to counterbalance the influence of the few. iLobby will offer users an opportunity to explicitly express their support for legislation rather than support candidates hoping they deliver on campaign promises.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    margin: 20
  }
});

import React, { Component, PropTypes } from 'react'
import { Navigator, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import LoginForm from '../components/LoginForm'
import HomeButtons from '../components/HomeButtons'
import TabBar from '../components/TabBar'
import About from '../components/About'

export default class iLobby extends Component {
  renderScene(route, navigator) {
    if (route.name == 'Login') {
      return (
        <View 
          navigator={navigator} 
          style={styles.container}
        >
          <Text h1 style={styles.welcome}>
            iLobby
          </Text>
          <Text h4 style={styles.title}>
            Crowdfunding Legislation
          </Text>
          <LoginForm/>
          <HomeButtons/>  
          <TabBar/>
        </View>
      );
    }
    if (route.name == 'About') {
      return <About navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{name: 'About'}}
        renderScene={ this.renderScene} 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // padding: 10
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
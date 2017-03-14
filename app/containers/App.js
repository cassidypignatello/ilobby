import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import Router from 'react-native-simple-router'
import { Text } from 'react-native-elements'
import LoginForm from '../components/LoginForm'
import HomeButtons from '../components/HomeButtons'
import TabBar from '../components/TabBar'
import About from '../components/About'

export default class iLobby extends Component {

  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        statusBarColor='black'
      />
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.toRoute({
      name: 'About',
      component: About
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text h4 style={styles.welcome}>
            Crowdfunding Legislation
          </Text>
          <LoginForm/>
          <HomeButtons
            onPress={this.nextPage}
          />  
        <TabBar/>
      </View>
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
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    textAlign: 'center',
    margin: 20
  }
});
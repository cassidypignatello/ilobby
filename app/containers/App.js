import React, { Component, PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'
import Login from '../components/Login'
import About from '../components/About'
import Info from '../components/Info'
import Terms from '../components/Terms'
import Bills from '../components/Bills'
import TabIcon from '../components/TabIcon'

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  }
});

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="tabbar" tabs={true} hideNavBar tabBarStyle={styles.tabBar}>
      <Scene 
        key="billsTab"  
        title="Bills" 
        icon={TabIcon} 
        style={{paddingTop: 64}}
      >
        <Scene key="bills" component={Bills} title="Bills" onPress={() => {Actions.bills}}/>
      </Scene>
      <Scene 
        key="loginTab"  
        title="Login"
        icon={TabIcon}
        style={{paddingTop: 64}}
        initial={true}
      >
        <Scene key="login" component={Login} title="iLobby" onPress={() => {Actions.login}}/>
        <Scene key="about" component={About} title="Who We Are" />
        <Scene key="info" component={Info} title="Why You Should Care" />
        <Scene key="terms" component={Terms} title="Terms of Service" />
      </Scene>
    </Scene>
  </Scene>
);

export default class iLobby extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}


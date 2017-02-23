'use strict';
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'

export default class TabBar extends Component {
 
  render() {
    
    return (
      <View>
        <Tabs tabBarStyle={styles.tabbar}>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            title='Bills'
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='file-text' type='font-awesome' size={25} />}
          >
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            title='Representatives'
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='bullhorn' type='font-awesome' size={25} />}
          >
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            title='Contributions'
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='usd' type='font-awesome' size={25} />}
          >
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flex: 1
  }
});
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'

export default class TabIcon extends Component {
  render(){
    // render an icon and the title of the tab here
    return(
      <View style={styles.tabIcon}>
        <Icon color={'#5e6977'} name={this.props.iconName} type='font-awesome' size={26} />
        <Text style={{color: this.props.selected ? 'red' : 'black', fontSize: 12}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
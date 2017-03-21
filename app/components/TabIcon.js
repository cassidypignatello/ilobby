import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

export default class TabIcon extends Component {
  render(){
    // render an icon and the title of the tab here
    return(
      <Text style={{color: this.props.selected ? 'red' : 'black'}}>
        {this.props.title}
      </Text>
    );
  }
}
const styles = StyleSheet.create({

});
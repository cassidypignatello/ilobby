import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Colorado Senate Bill 113',
    avatar_url: 'https://unsplash.it/128/?random',
    subtitle: 'Repeal Large Magazine Ammo Ban'
  },
  {
    name: 'New York Senate Bill S1747',
    avatar_url: 'https://unsplash.it/128/?random',
    subtitle: 'Marijuana Regulation and Taxation Act'
  },
  {
    name: 'North Carolina House Bill 2',
    avatar_url: 'https://unsplash.it/128/?random',
    subtitle: 'Public Facilities Privacy & Security Act'
  }
]

export default class Bills extends Component {
  render() {
    return (
      <List containerStyle={styles.container}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63, 
    marginBottom: 20
  }
});
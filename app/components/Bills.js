import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Card, List, ListItem, Text } from 'react-native-elements'
import Bill from './Bill'

const list = [
  {
    name: 'Colorado Senate Bill 113',
    avatar_url: 'https://unsplash.it/500/150/?random',
    subtitle: 'Repeal Large Magazine Ammo Ban'
  },
  {
    name: 'New York Senate Bill S1747',
    avatar_url: 'https://unsplash.it/550/150/?random',
    subtitle: 'Marijuana Regulation and Taxation Act'
  },
  {
    name: 'North Carolina House Bill 2',
    avatar_url: 'https://unsplash.it/475/150/?random',
    subtitle: 'Public Facilities Privacy & Security Act'
  }
]

export default class Bills extends Component {
  render() {
    
    return (
      <ScrollView style={styles.container}>
        {
          list.map((l, i) => (
            <Card
              image={{uri:l.avatar_url}}
              key={i}
              title={l.name}
              titleStyle={styles.cardTitle}
            >
              <Text style={styles.cardText}>
                {l.subtitle}
              </Text>
              <Button
                iconRight
                icon={{name: 'play-arrow'}}
                backgroundColor='#03A9F4'
                buttonStyle={styles.cardButton}
                title='VIEW DETAILS'
                onPress={Actions.bill}
              />
            </Card>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63, 
    marginBottom: 20
  },
  cardButton: {
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0
  },
  cardTitle: {
    textAlign: 'center'
  },
  cardText: {
    textAlign: 'center',
    marginBottom: 10
  }
});
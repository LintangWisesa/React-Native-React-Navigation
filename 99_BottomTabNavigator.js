import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import { createBottomTabNavigator, createAppContainer } 
from 'react-navigation'

// 1st component
class KomponenSatu extends Component {
  render(){
    return(
      <View>
        <Text style={{fontSize: 35}}>
          Ini Komponen Satu
        </Text>
        <Button
          title = 'Ke halaman dua'
          onPress = {()=>{
            this.props.navigation.navigate('HalDua')
          }}
        />
      </View>
    )
  }
}

// 2nd component
class KomponenDua extends Component {
  render(){
    return(
      <View>
        <Text style={{fontSize: 35}}>
          Ini Komponen Dua
        </Text>
        <Button
          title = 'Ke halaman satu'
          onPress = {()=>{
            this.props.navigation.navigate('HalSatu')
          }}
        />
      </View>
    )
  }
}

// bottom tab navigator: tab on bottom screen!
var AppNavigator = createBottomTabNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default createAppContainer(AppNavigator)
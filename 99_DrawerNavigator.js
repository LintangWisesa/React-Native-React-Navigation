import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import { createDrawerNavigator, createAppContainer } 
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
          title = 'Buka Menu'
          onPress = {()=>{
            this.props.navigation.toggleDrawer();
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
          title = 'Buka Menu'
          onPress = {()=>{
            this.props.navigation.toggleDrawer();
          }}
        />
      </View>
    )
  }
}

// drawer navigator
var AppNavigator = createDrawerNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
)

export default createAppContainer(AppNavigator)
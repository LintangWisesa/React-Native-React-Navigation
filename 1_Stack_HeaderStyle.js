import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import { createStackNavigator, createAppContainer } 
from 'react-navigation'

// 1st component with header style
class KomponenSatu extends Component {
  static navigationOptions = {
    title: 'Satu',
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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

// 2nd component with header style
class KomponenDua extends Component {
  static navigationOptions = {
    title: 'Dua',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: 'yellow',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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

// stack navigator
var AppNavigator = createStackNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu'
  }
)

export default createAppContainer(AppNavigator)
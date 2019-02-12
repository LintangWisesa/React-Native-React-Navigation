import React, { Component } from 'react'
import {View, Text, Button, Image} from 'react-native'
import { createStackNavigator, createAppContainer } 
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

// logo component
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./img/lintang.png')}
        style={{ width: 30, height: 30, marginLeft: 10 }}
      />
    );
  }
}

// stack navigator with headers style
var AppNavigator = createStackNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu',
    defaultNavigationOptions: {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="klik"
          color="blue"
        />
      ),
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(AppNavigator)
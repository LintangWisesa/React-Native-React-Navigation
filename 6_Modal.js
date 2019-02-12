import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import { createStackNavigator, createAppContainer } 
from 'react-navigation'

// 1st component will send params {nama: 'Andi', usia: 28}!
class KomponenSatu extends Component {
  static navigationOptions = {
    title: 'Satu'
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 35}}>
          Ini Komponen Satu
        </Text>
        <Button
          title = 'Ke halaman dua'
          onPress = {()=>{
            this.props.navigation.navigate('HalDua', {
              nama: 'Andi',
              usia: 28,
            })
          }}
        />
        <Button
          title = 'Buka modal'
          onPress = {()=>{this.props.navigation.navigate('MyModal')}}
        />
      </View>
    )
  }
}

// 2nd component receive params & set it as header title
class KomponenDua extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('nama', ''),
    };
  };
  render(){
    const nama = this.props.navigation.getParam('nama', '');
    const usia = this.props.navigation.getParam('usia', '');
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
        <Text style={{fontSize: 20}}>nama: {nama}</Text>
        <Text style={{fontSize: 20}}>usia: {usia}</Text>
      </View>
    )
  }
}

// modal
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Ini modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Tutup"
        />
      </View>
    );
  }
}

var AppNavigator = createStackNavigator(
  {
    HalSatu: KomponenSatu,
    HalDua: KomponenDua
  },
  {
    initialRouteName: 'HalSatu'
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack)
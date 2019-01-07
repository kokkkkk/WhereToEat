import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './Screens/home';

import {createDrawerNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}


const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen:HomeScreen} 
},
);

const AppContainer= createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';

import HomeScreen from './Screens/home';
import RegionScreen from './Screens/Region';
import AboutUsScreen from './Screens/AboutUs';

import {createDrawerNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen:HomeScreen}, 
  Region:{screen:RegionScreen}, 
  "About Us":{screen:AboutUsScreen}, 
},
);
const AppContainer= createAppContainer(AppDrawerNavigator);

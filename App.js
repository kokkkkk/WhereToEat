import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createDrawerNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Where To Eat</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: Home
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

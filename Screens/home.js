import React from 'react';
import {Text, View } from 'react-native';
import styles from './CSS';

export default class home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>
          <Text>Home</Text>
        </View>
      );
    }
  }
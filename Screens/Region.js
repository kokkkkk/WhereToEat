import React from 'react';
import {Text, View } from 'react-native';
import styles from '../CSS';

export default class Region extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>
          <Text>Region</Text>
        </View>
      );
    }
  }

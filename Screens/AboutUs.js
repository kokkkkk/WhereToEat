import React from 'react';
import {Text, View } from 'react-native';
import styles from '../CSS';

export default class AboutUs extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>
          <Text>About Us</Text>
        </View>
      );
    }
  }

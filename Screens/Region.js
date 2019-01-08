import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    Header:{
      backgroundColor: 'orange',
      elevation: 10,
      height:'10%',
      alignItems: 'flex-start',
      width: '100%',
    },
    Heading:{ 
      marginTop: '10%',
      marginRight:'10%',
      marginLeft:'10%',
      textAlign: 'center',
      fontSize: 20,
    }
  });

import React from 'react';
import {Text, View, Linking, ImageBackground, TouchableOpacity, Image} from 'react-native';
import styles from '../CSS';

export default class AboutUs extends React.Component {

    constructor(props){
        super(props);
        var ver = require('../app.json');
        this.state= {
            version: "Version: "+ ver.expo.version
        };
    }

    link(source){
        if(source=="FB"){
            Linking.openURL('https://www.facebook.com/raaaandomcreation/');
        }else if(source=="blog"){
            Linking.openURL('https://randomscreation.blogspot.com/');
        }
    }

    render() {
      return (
        <ImageBackground source={require('../assets/bgImage.jpg')} resizeMode="repeat" style={{width: '100%', height: '100%'}}>

        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={styles.Heading}>About Us</Text>
            </View>   

            <View style={styles.Body}>
                <Text style={styles.BodyHeadText}>Where To Eat</Text>

                <Image source={require('../assets/icon.png')}></Image>

                <Text style={styles.BodySubText}>{this.state.version}</Text>
                <Text style={styles.BodySubText}>Produced By Random Creation</Text>

                <Image source={require('../assets/RCicon.jpg')}></Image>

                <Text style={styles.BodySubText}>All rights reserved</Text> 

                <TouchableOpacity onPress={() =>this.link('FB')}>
                    <Text style={styles.BodyHeadText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.link('blog')}>
                    <Text style={styles.BodyHeadText}>Blog</Text>
                </TouchableOpacity>    

                </View> 

            </View>

        </ImageBackground>
      )}
}
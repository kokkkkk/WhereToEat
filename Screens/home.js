import React from 'react';
import { Text, View, Button,Image } from 'react-native';
import styles from '../CSS';

export default class home extends React.Component {

   constructor(props){
    super(props);
    this.state= {
        name: "",
        address: ""
    };
   }

    DrawResult = ()=>{
        fetch('https://cyclostome-informat.000webhostapp.com/connectDB.php', {
            method: 'POST',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                 key: "All",
            })
        })
        .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({name:responseJson.name});
                this.setState({address:responseJson.address});
            })
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>

          <Text style={styles.BodyHeadText}>Please Press the button</Text>

          <View style={{flex: 1,justifyContent: 'center',marginTop: '30%',}}>
            <Text style={styles.BodyHeadText}>{this.state.name}</Text>
            <Text style={styles.BodySubText}>{this.state.address}</Text>
            <Image style={{width: 200, height: 200}} source={{uri:"https://cyclostome-informat.000webhostapp.com/photos/"+this.state.name+".jpg"}}></Image>
          </View>

          <View style={styles.Footer}>
            <Button title="Draw" onPress={this.DrawResult}
                color="blue">
             </Button>
        </View>

        </View>
      );
    }
  }
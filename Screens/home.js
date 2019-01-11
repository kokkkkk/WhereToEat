import React from 'react';
import { Text, View, Button, } from 'react-native';
import styles from '../CSS';

export default class home extends React.Component {

   constructor(props){
    super(props);
    this.state= {
        name: "name",
        address: "address"
    };
   }

    DrawResult = ()=>{
        
        alert("draw");
        fetch('https://cyclostome-informat.000webhostapp.com/connectDB.php', {
            method: 'POST',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                 key: "test",
            })
        })
        .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({name:responseJson.name});
                this.setState({address:responseJson.address});
                alert(responseJson.name);
            })
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>
          <Text>Home</Text>
          <Text>{this.state.name}</Text>
          <Text>{this.state.address}</Text>
          <Button title="Draw" onPress={this.DrawResult}
          color="blue">
          </Button>
        </View>
      );
    }
  }
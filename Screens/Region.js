import React from 'react';
import {Text, View, Picker, Button, Image} from 'react-native';
import styles from '../CSS';

export default class Region extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            region: "",
            name: "",
            address:"",
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
                 key: "test",
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
        <View style={[styles.container,{backgroundColor:'white'}]}>
          <View style={styles.Header}>
            <Text style={styles.Heading}>Where To Eat</Text>
          </View>

          <Text style={styles.BodyHeadText}>Please Select a Region</Text>
          <Picker
                selectedValue={this.state.region}
                style={{ height: '10%', width: '50%', color: 'blue',
                    transform: [
                        { scaleX: 2 }, 
                        { scaleY: 2 },
                    ]}}
                onValueChange={(itemValue) => this.setState({region: itemValue})}>
                <Picker.Item label="全部" value="All" />
                <Picker.Item label="白田" value="whitefarm" />
                <Picker.Item label="石硤尾" value="SKM"/>
                <Picker.Item label="南山邨" value="SME"/>
                <Picker.Item label="其他" value="Others"/>
            </Picker>

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

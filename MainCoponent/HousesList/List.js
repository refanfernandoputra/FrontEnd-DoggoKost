import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../../Src/Actions/index'
import Axios from 'axios';

class List extends Component{
    constructor(props)    {
        super(props)
        this.state = {
            email : '',
            password : '',
            data : []
        }
    }
    render(){
       
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <Text>{this.props.list.rentname}</Text>
                    <Text>{this.props.list.rentadress}</Text>
                    <Text>{this.props.list.town}</Text>
                    <Text>{this.props.list.latitude}</Text>
                    <Text>{this.props.list.longtitude}</Text>
                    <Text>{this.props.list.rentowner}</Text>
                    <Text>{this.props.list.phoneNumber}</Text>
                    <Text>{this.props.list.roomstotal}</Text>
                    <Text>{this.props.list.roomsleft}</Text>
                    <Text>{this.props.list.price}</Text>
                    <Text>{this.props.list.image1}</Text>
                    <Text>{this.props.list.image2}</Text>
                    <Text>{this.props.list.image3}</Text>
                </ScrollView>
            </View>
        )
    }
}

lists = (state)=>{
    return{
        
        list : state.list
    }
}


export default connect(lists,null)(List);

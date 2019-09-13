import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {houses, apartment, services, career} from '../../Src/Actions/index'
import styles from './AdsFormStyle';
import MapView, { Marker } from 'react-native-maps';


class AdsForm extends Component{
    constructor(props)    {
        super(props)
        this.state = {
            latitude:37.78825,
            longitude : -122.4324,
            housesName : '',
            province : '',
            district : '',
            subDistrict : '',
            postal : 0,
            totalRoom : 0,
            price : 0,
            adress :'',
            gender : 'male',
            
        }
    }
    render(){
       
        return(
            <View style={{flex:1, backgroundColor:'#eee'}}>
                    <ScrollView style={{flex:1, margin : 15}} >
                        <View style={styles.addAdsContainer} >
                            <View style={styles.title} >
                                <Image style={styles.iconLogo} source={require('../../assets/inu.png')} />
                                <Text style={styles.titleLogo} >Advert your boarding house now!!</Text>
                            </View>
                            <View style={styles.adsForm} >
                                <View style={styles.mapTitle}>
                                    <Text>Locate your houses</Text>
                                </View>
                                <View style={styles.mapContainer} >
                                    <View style={{borderWidth : 1, borderColor : '#0cf'}} >
                                    <MapView
                                    style={{width: 320, height : 150}}
                                    region={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                    }}
                                    >
                                        <Marker
                                        coordinate={{latitude : 37.78825,
                                            longitude: -122.4324,}}
                                        draggable={true}
                                        onDrag={(data)=>{
                                            this.setState({
                                                latitude : data.nativeEvent.coordinate.latitude,
                                                longitude : data.nativeEvent.coordinate.longitude
                                            })
                                        }}
                                        />
                                
                                    </MapView>
                                    </View>
                                    <View style={styles.marker} >
                                        <Text>latitude :{this.state.latitude} </Text>
                                        <Text>longitude : {this.state.longitude}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TextInput
                                    placeholder='Enter your houses name'
                                    placeholderTextColor ='#0cf'
                                    style={styles.formField}
                                    ref={(input)=>{this.housesNameField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            housesName : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.housesName==''? (alert('Please enter your houses name'),this.provinceField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses province'
                                    placeholderTextColor ='#0cf'
                                    style={styles.formField}
                                    ref={(input)=>{this.provinceField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            province : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.province==''? (alert('Please enter your houses province'),this.districtField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses district'
                                    placeholderTextColor ='#0cf'
                                    style={styles.formField}
                                    ref={(input)=>{this.districtField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            district : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.district==''? (alert('Please enter your houses district'),this.subDistrictField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses sub-district'
                                    placeholderTextColor ='#0cf'
                                    style={styles.formField}
                                    ref={(input)=>{this.subDistrictField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            subDistrict : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.subDistrict==''? (alert('Please enter your houses sub-district'),this.postalField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses postal code'
                                    placeholderTextColor ='#0cf'
                                    keyboardType='number-pad'
                                    style={styles.formField}
                                    ref={(input)=>{this.postalField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            postal : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.postal==0? (alert('Please enter your houses postal code'),this.housesPriceField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses price'
                                    placeholderTextColor ='#0cf'
                                    keyboardType='number-pad'
                                    style={styles.formField}
                                    ref={(input)=>{this.housesPriceField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            price : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.price==''? (alert('Please enter your houses price'),this.totalRoomField.focus()): null
                                    }}
                                    />

                                    <TextInput
                                    placeholder='Enter your houses total room'
                                    placeholderTextColor ='#0cf'
                                    keyboardType='number-pad'
                                    style={styles.formField}
                                    ref={(input)=>{this.totalRoomField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            totalRoom : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.totalRoom==0? (alert('Please enter your total room left'),this.adressField.focus()): 
                                        null
                                    }}
                                    />
                                    <TextInput
                                    placeholder='Enter your houses adress'
                                    placeholderTextColor ='#0cf'
                                    multiline={true}
                                    style={styles.formField}
                                    ref={(input)=>{this.adressField=input}}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            adress : text
                                        })
                                    }}
                                    returnKeyType='next'
                                    onSubmitEditing={()=>{
                                        this.state.adress==''? (alert('Please enter your houses name')): null
                                    }}
                                    />
                                    <View style={styles.genderForm}>
                                    <Text style={styles.genderTitle}>Gender : </Text>
                                    <View style={styles.genderButtonContainer} >
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                gender : 'male'
                                            })
                                        }}
                                        style={styles.genderButton}>
                                            <View style={[styles.genderInActive,this.state.gender=='male'?{backgroundColor : '#0cf'}: null]}>
                                                <Text></Text>
                                            </View>
                                            <Text>Male</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                gender : 'female'
                                            })
                                        }}
                                        style={styles.genderButton} >
                                            <View style={[styles.genderInActive,this.state.gender=='female'?{backgroundColor : '#0cf'}: null]}>
                                                <Text></Text>
                                            </View>
                                            <Text>Female</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                gender : 'both'
                                            })
                                        }}
                                        style={styles.genderButton} >
                                            <View style={[styles.genderInActive,this.state.gender=='both'?{backgroundColor : '#0cf'}: null]}><Text></Text></View>
                                            <Text>Both</Text>
                                        </TouchableOpacity>
                                    </View>
                                    </View>

                                </View>
                            </View>
                        
                            <View style={{flex:1}}>
                                <TouchableOpacity 
                                onPress={()=>{

                                    this.state.housesName==''? alert('please enter your houses name') : 
                                    this.state.province==''? alert('please enter your province') : 
                                    this.state.district==''? alert('please enter your district') : 
                                    this.state.subDistrict=='' ? alert('please enter your sub-district') :
                                    this.state.postal==0 ? alert('please enter your postal code') : 
                                    this.state.totalRoom ==0 ? alert("please enter your room's total") : 
                                    this.state.price==0 ? alert('please enter your houses price') : 
                                    this.state.adress=='' ? alert('please enter your houses adress') : 


                                    Axios.post(`http://192.168.1.20:5000/api/v1/houseslist`, 
                        {
                            'User_ID': this.state.email, 
                            'RentName': this.state.password,
                            'RentAddress': this.state.name,
                            'Town': this.state.gender,
                            'phoneNumber': this.state.phone,
                            'job': this.state.proffesion
                        }
                        ).then( res => {
                            
                        })



                                    

                                }}
                                >
                                    <Text style={{color :'#fff', fontSize : 18}}>
                                        Advert
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </ScrollView>
            </View>
        )
    }
}

login = (state)=>{
    return{
        
        navigator : state.navigator
    }
}


export default connect(login,{houses, apartment, career, services})(AdsForm);

import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../../Src/Actions/index'
import styles from './LoginUserStyle';
import Axios from 'axios';

class LoginUser extends Component{
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
                    <ScrollView style={styles.loginContainer} >
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('../../assets/inu.png')} />
                            <View style={styles.iconText}>
                                <Text style={styles.textLogo}>
                                    DoggoKost
                                </Text>
                                <Text style={styles.titlePage}>
                                    Login Page
                                </Text>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <TextInput 
                            keyboardType='email-address' 
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoCompleteType='off'
                            style={styles.formInput} 
                            placeholder='Enter your e-mail'
                            placeholderTextColor='#0cf' 
                            onChangeText={(text)=>{
                                this.setState({
                                    email : text
                                })
                            }}
                            ref={(input) => { this.emailField = input; }}
                            onSubmitEditing={() => {this.state.email==''?alert('please fill email'): this.passwordField.focus(); }}
                            returnKeyType ='next'
                            />
                            <TextInput 
                            secureTextEntry={true} 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            autoCompleteType='off' 
                            style={[styles.formInput,{marginBottom:10}]} 
                            placeholder='Enter your password' 
                            placeholderTextColor='#0cf'
                            onChangeText={(text)=>{
                                this.setState({
                                    password : text
                                })
                            }}
                            ref={(input) => { this.passwordField = input; }}
                            onSubmitEditing = {()=>{this.state.password==''?alert('please enter your password'): null}}
                            
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.forgotButtonContainer} >
                                    <Text style={styles.forgotButton} >Forgot Password ?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.state.email == '' ? alert('please enter your e-mail') : 
                                    this.state.password =='' ? alert('please enter yout passwor') :
                                    
                                    Axios.get(`http://192.168.43.20:5000/api/v1/login/${this.state.email}/${this.state.password}`, ).then( res => {
                                        const data = res.data
                                        this.state.email==data.email ? (this.props.login(data),this.props.navigation.navigate('Home')) : alert('no Id with corresponding e-mail')
                                    })


                                }}
                                
                                >
                                    <Text style={styles.loginButton}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.registerContainer} >
                            <Text style={{color : '#0cf'}}>didn't have any account yet ? </Text>
                            <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('RegisterUser')
                            }}
                            >
                                <Text style={{color : '#0cf', textDecorationColor : '#0cf', textDecorationLine: 'underline'}} >
                                    Register here
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
            </View>
        )
    }
}

loginUsers = (state)=>{
    return{
        
        loginUser : state.login
    }
}


export default connect(loginUsers,{login})(LoginUser);

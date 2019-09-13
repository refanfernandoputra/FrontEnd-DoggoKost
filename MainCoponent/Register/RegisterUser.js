import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {houses, apartment, services, career} from '../../Src/Actions/index'
import styles from './RegisterUserStyle';
import Axios from 'axios';


class RegisterUser extends Component{
    constructor(props)    {
        super(props)
        this.state = {
            name : '',
            email : '',
            password : '',
            password2 : '',
            phoneNumber : '',
            gender : 'male',
            job : 'others'
        }
    }
    render(){
       
        return(
            <View style={{flex:1, backgroundColor:'#eee'}}>
                    <ScrollView style={{flex:1, margin : 15}} >
                        <View style={styles.registerContainer} >
                            <View style={styles.logoContainer}>
                                <Image source={require('../../assets/inu.png')}
                                style={styles.iconLogo}
                                />
                                <View style={styles.textLogoContainter} >
                                    <Text style={styles.text1}>
                                        DoggoKost
                                    </Text >
                                    <Text style={styles.text2} >
                                        Register and Rent Fast!!
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.formField}>
                                <TextInput 
                                keyboardType='default' 
                                autoCapitalize='characters'
                                autoCorrect={false}
                                autoCompleteType='off'
                                style={styles.formInput} 
                                placeholder='Enter your name'
                                placeholderTextColor='#0cf' 
                                onChangeText={(text)=>{
                                    this.setState({
                                        name : text
                                    })
                                }}
                                ref={(input) => { this.nameField = input; }}
                                onSubmitEditing={() => {this.state.name==''?alert('please enter your name'): this.emailField.focus(); }}
                                returnKeyType ='next'
                                />
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
                                onSubmitEditing={() => {this.state.email==''?alert('please enter your email'): this.passwordField.focus(); }}
                                returnKeyType ='next'
                                />
                                <TextInput 
                                secureTextEntry={true}
                                keyboardType='default' 
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoCompleteType='off'
                                style={styles.formInput} 
                                placeholder='Enter your password'
                                placeholderTextColor='#0cf' 
                                onChangeText={(text)=>{
                                    this.setState({
                                        password : text
                                    })
                                }}
                                ref={(input) => { this.passwordField = input; }}
                                onSubmitEditing={() => {this.state.password==''?alert('please enter your password'): this.password2Field.focus(); }}
                                returnKeyType ='next'
                                />
                                <TextInput 
                                secureTextEntry={true}
                                keyboardType='default' 
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoCompleteType='off'
                                style={styles.formInput} 
                                placeholder='Re-type your password'
                                placeholderTextColor='#0cf' 
                                onChangeText={(text)=>{
                                    this.setState({
                                        password2 : text
                                    })
                                }}
                                ref={(input) => { this.password2Field = input; }}
                                onSubmitEditing={() => {this.state.password!=this.state.password2?alert('your password didnt match'):
                                this.phoneNumberField.focus(); }}
                                returnKeyType ='next'
                                />                                
                                <TextInput 
                                keyboardType='number-pad' 
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoCompleteType='off'
                                style={styles.formInput} 
                                placeholder='Enter your phone number'
                                placeholderTextColor='#0cf' 
                                onChangeText={(text)=>{
                                    this.setState({
                                        phoneNumber : text
                                    })
                                }}
                                ref={(input) => { this.phoneNumberField = input; }}
                                onSubmitEditing={() => {this.state.phoneNumber==''?alert('please enter your number'): null }}
                                returnKeyType ='next'
                                />
                                <View style={styles.genderForm}>
                                    <Text style={styles.genderTitle}>Gender : </Text>
                                    <View>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                gender : 'male'
                                            })
                                        }}
                                        style={styles.genderButton}>
                                            <View style={[styles.genderInActive,this.state.gender=='male'?{backgroundColor : '#0cf'}: null]}><Text></Text></View>
                                            <Text>Male</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                gender : 'female'
                                            })
                                        }}
                                        style={styles.genderButton} >
                                            <View style={[styles.genderInActive,this.state.gender=='female'?{backgroundColor : '#0cf'}: null]}><Text></Text></View>
                                            <Text>Female</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.genderForm}>
                                    <Text style={styles.genderTitle}>Job : </Text>
                                    <View>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                job : 'student'
                                            })
                                        }}
                                        style={styles.genderButton}>
                                            <View style={[styles.genderInActive,this.state.job=='student'?{backgroundColor : '#0cf'}: null]}>
                                                <Text></Text>
                                            </View>
                                            <Text>Student</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                job : 'employed'
                                            })
                                        }}
                                        style={styles.genderButton} >
                                            <View style={[styles.genderInActive,this.state.job=='employed'?{backgroundColor : '#0cf'}: null]}>
                                                <Text></Text>
                                            </View>
                                            <Text>Employed</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={()=>{
                                            this.setState({
                                                job : ''
                                            })
                                        }}
                                        style={styles.genderButton} >
                                            <View style={[styles.genderInActive,
                                                this.state.job!='employed' && this.state.job!='student' ? {backgroundColor : '#0cf'}:
                                                this.state.job!=''? null :
                                                null]}><Text></Text>
                                            </View>
                                            <Text>Others</Text><TextInput 
                                            autoCapitalize='none' autoCorrect={false} autoCompleteType='off' 
                                            placeholder='enter your job'
                                            placeholderTextColor={'#0cf'}
                                            style={{borderBottomWidth:1,borderColor:'#0cf', marginLeft:10}}
                                            onChangeText={(text)=>{
                                                this.setState({
                                                    job : text
                                                })
                                            }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                                   
                            </View>
                        <View style={styles.registerButtonContainer}>
                            <TouchableOpacity
                            
                            onPress={
                                ()=>{
                                    this.state.name == '' ? (alert('plese fill name'),this.nameField.focus()):
                                    this.state.email == '' ? (alert('please eneter your e-mail'),this.emailField.focus()) : 
                                    this.state.password == '' ? (alert('please enter your password'),this.passwordField.focus()):
                                    this.state.password2 =='' ? (alert('your password didnt match'),this.password2Field.focus()) : 
                                    this.state.phoneNumber == '' ? (alert('please enter your phone number'),this.phoneNumberField.focus()) : 
                                    

                                    (Axios.post(`http://192.168.43.20:5000/api/v1/users`,{
                            'email': this.state.email, 
                            'password': this.state.password,
                            'name': this.state.name,
                            'gender': this.state.gender,
                            'phoneNumber': this.state.phoneNumber,
                            'job': this.state.job
                        }
                        ).then( res => {                             
                        }),
                        this.props.navigation.navigate('Home'),alert('Success, Go Login'))
                        }
                            }
                            
                            style={styles.registerButton}>
                                <Text style={styles.registerText} >Register</Text>
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


export default connect(login,{houses, apartment, career, services})(RegisterUser);

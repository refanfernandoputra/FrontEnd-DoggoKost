import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    registerContainer : {
        flex : 1
    },
            logoContainer : {
                flex : 2,
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'flex-start'
            },
                    iconLogo : {
                        width : 100,
                        height : 100,
                    },
                    textLogoContainer : {

                    },
                            text1:{
                                fontSize : 20,
                                color :'#0cf',
                                fontWeight : 'bold'
                            },
                            text2:{
                                fontSize : 15,
                                color:'#0cf'
                            },
                    formInput : {
                        paddingBottom : -10,
                        borderBottomColor : '#0cf',
                        borderBottomWidth : 1,
                    },
                    genderForm : {
                        marginVertical : 10,
                        flexDirection : 'row',
                        alignItems : 'center',
                    },
                            genderTitle : {
                                color : '#0cf',
                                marginRight : 20,
                                alignSelf : 'flex-start',
                            },
                            genderButton:{
                                flexDirection : 'row',
                                alignItems : 'center'
                            },
                                    genderInActive:{
                                        width :15,
                                        height : 15,
                                        borderRadius : 50,
                                        borderColor : '#0cf',
                                        borderWidth : 1,
                                        marginRight : 5,
                                    },
            registerButtonContainer : {
                alignItems : 'flex-end'
            },
            registerButton : {
                paddingHorizontal :10,
                paddingVertical : 5,
                backgroundColor : '#0cf',
                borderRadius : 8
            },
                    registerText :{
                        color : '#fff',
                        fontSize : 16
                    }
})

export default styles;
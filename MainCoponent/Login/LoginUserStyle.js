import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    loginContainer : {
        flex : 1,
        backgroundColor : '#eee',
        padding : 10
    },
            iconContainer : {
                flex : 3,
                flexDirection : 'row',
                justifyContent : 'flex-start',
            },
                    icon : {
                        flex : 1,
                        width: 150,
                        height : 150,
                    },
                    iconText : {
                        flex : 2,
                        paddingLeft : 20,
                        justifyContent : 'center',
                    },
                            textLogo :{
                                fontSize : 30,
                                color : '#0cf',
                                fontWeight : 'bold'
                            },
                            titlePage : {
                                fontSize : 23,
                                color : '#0cf',
                            },
    formContainer : {
        flex : 5,
        alignItems: 'center',
        justifyContent : 'space-around'
    },
            formInput : {
                borderBottomWidth : 1,
                borderBottomColor : '#0cf',
                minWidth : '80%',
                marginVertical : 30,
                paddingBottom : -10
            },
            buttonContainer : {
                flexDirection : 'row',
                alignSelf : 'flex-end',
                marginTop : 20
            },
                    forgotButtonContainer:{
                        justifyContent : 'center',
                        marginRight : 10
                    },
                            forgotButton : {
                                color : '#0cf',
                                alignSelf : 'center'
                            },
                            loginButton : {
                                backgroundColor : '#0cf',
                                color : '#fff',
                                fontSize : 17,
                                marginRight : 30,
                                padding : 10,
                                paddingVertical : 5,
                                borderRadius : 5
                            },
    registerContainer : {
        flex : 2,
        flexDirection :'row',
        justifyContent : 'center',
        marginTop : 30
    }
})

export default styles;
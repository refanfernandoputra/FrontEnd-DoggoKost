import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logo : {
        flex : 1,
    },
            icoContainer : {
                flex : 0.8,
                flexDirection :'row',
                alignItems : 'center'
            },
                    icoHeader : {
                        width : 35,
                        height : 35,
                    },
                    wordHeader : {
                        color : '#0cf',
                        fontSize : 15,
                        fontWeight : 'bold'
                    },
            nav : {
                flex : 1.2,
                flexDirection :'row',
                justifyContent : 'space-between',
                alignItems : 'center'
            },
                    icoNav : {
                        flex :1,
                        alignItems : 'center',
                        justifyContent : 'space-around' ,
                        flexDirection : 'row'
                    },
                    activeIcon : {
                        flex : 1.2,
                        backgroundColor : '#ddf',
                        borderRadius : 8,
                        paddingVertical : 3,
                    },
                            imageNav : {
                                width : 30,
                                height : 30
                            },
                            textNav :{
                                color : '#0cf',
                                fontSize : 13,
                                textAlign : 'left'
                            }
})

export default styles;
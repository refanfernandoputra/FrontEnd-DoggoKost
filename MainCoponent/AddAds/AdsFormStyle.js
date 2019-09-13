import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    addAdsContainer : {
        flex : 1,
        alignItems : 'flex-start',
    },
        title : {
            alignItems : 'flex-start',
            marginBottom : 15
        },
            iconLogo : {
                width : 60,
                height : 60,
                marginLeft : -5
            },
            titleLogo : {
                color : '#0cf',
                fontSize : 17,
            },
        adsForm : {
            flex :1,
            alignSelf : 'center'
        },
            mapTitle : {
                color : '#0cf',
                marginBottom : 5
            },
            mapContainer : {
                alignSelf : 'center'
            },
                marker:{
                    marginVertical : 10,
                    alignItems : 'flex-start'
                },
        formField : {
            borderBottomColor:'#0cf',
            borderBottomWidth : 1,
            paddingBottom : -10,
            marginBottom : 10
        },
        genderForm : {
            flexDirection : 'row'
        },
            genderTitle : {
                color : '#0cf'
            },
            genderButton : {
                flexDirection : 'row'
            },
                genderInActive : {
                    borderWidth : 1,
                    borderColor :'#0cf',
                    borderRadius : 50,
                    width : 20,
                    height : 20,
                    marginRight : 15
                }
})

export default styles;
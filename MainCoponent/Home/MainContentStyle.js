import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        marginHorizontal : 15,
        justifyContent : 'center'
    },
            scrollContainter : {
                flex : 1,
                justifyContent : 'center'
            },
                    textBeforeSearch : {
                        flex : 0.9,
                        justifyContent : 'center'
                    },
                            text1 : {
                                fontSize : 13,
                                color : '#222'
                            },
                            text2 : {
                                fontSize : 16,
                                color : '#222'
                            },
                    searchContainer : {
                        flex : 0.6,
                        justifyContent : 'center',
                        paddingVertical : 5
                    },
                            onPressSearch : {
                                flex : 1,
                                justifyContent : 'center',
                                backgroundColor : '#ccf',
                                paddingVertical : 10,
                                paddingHorizontal : 15,
                                borderRadius : 10
                            },
                                    textSearch : {
                                        color : '#555',
                                        fontSize : 12,
                                     },
            promoContainer : {
                flex : 2,
                justifyContent : 'center',
                marginVertical : 15
                
            },
                    promoText : {
                        flex : 1,
                        fontSize : 17,
                        color : '#222',
                        marginBottom : 5
                    },
                    promoMain : {
                        flex :3,
                        justifyContent : 'center',
                        alignItems : 'center',
                        marginVertical : 10
                    },
                            imagePromo : {
                                width : 250,
                                height : 125,
                                borderRadius : 15,
                                marginHorizontal : 10
                            },
            addAdsContainer :{
                flex : 1.5,
                flexDirection : 'row',
                backgroundColor : '#0cf',
                borderRadius : 8,
                marginVertical : 10,
                justifyContent : 'space-between',
                alignItems : 'center',
                padding : 10
            },
                            addAdsText1 : {
                                fontSize : 13,
                                color : '#fff',
                            },
                            addAdsText2 : {
                                fontSize : 11,
                                color : '#fff',
                            },
                    adsLoginContainer:{
                        borderWidth : 1,
                        borderRadius : 5,
                        borderColor : '#fff',
                        justifyContent : 'center',
                        alignItems : 'center',
                        padding : 3,
                        paddingHorizontal : 13
                    },
                            adsLogin:{
                                fontSize : 13,
                                color : '#fff'
                            },
            popularTownContainer : {
                marginVertical : 10,
                marginBottom : 20,
            },
                    popularTownText : {
                        color : '#111',
                        fontSize : 17,
                        marginBottom : 10
                    },
                    popularTownScrollContainer:{
                        marginVertical : 10,
                    },
                            touchableContainer : {
                                marginRight : 10,
                            },
                                    imagePopular : {
                                        width : 120,
                                        height : 150,
                                        alignItems : 'flex-end',
                                    },
                                            popularText : {
                                                color : '#fff',
                                                padding : 10
                                            }
})

export default styles;
import React, {Component} from 'React';
import {View,Text,TouchableOpacity,ScrollView,Image,ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import styles from './MainContentStyle';
import {showlist} from '../../Src/Actions/index'
import Axios from 'axios';
    


class MainContent extends Component{
    

    render(){

    
        
        
        return(
            <View style={styles.mainContainer} >
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} >
                    {/* flex 0.9 */}
                    <View style={styles.textBeforeSearch}> 
                        <Text style={styles.text1}>
                            Hello, {this.props.loginUsers.name}
                        </Text>
                        <Text style={styles.text2}>
                        Are you looking for {
                                    this.props.navigator.mainNav == 'Houses' ? 'Boarding House' : this.props.navigator.mainNav
                                } ?
                        </Text>
                    </View>
                    {/* flex 0.6 */}
                    <View style={styles.searchContainer}> 
                        <TouchableOpacity 
                        
                        onPress={
                            ()=>{

                                Axios.get(`http://192.168.43.20:5000/api/v1/houseslist`, ).then( res => {
                                        const data = res.data
                                        (this.props.showlist(data),this.props.navigation.navigate('Lists')) 
                                    })


                            }
                        }
                        
                        
                        style={styles.onPressSearch}>
                            <Text style={styles.textSearch} >
                                Input Adress or Town
                            </Text>
                        </TouchableOpacity>
                    </View>
                        {/* flex 2 */}
                    <View style={styles.promoContainer}>
                        <Text style={styles.promoText} >Promo </Text>
                        <View style={styles.promoMain}>
                            <ScrollView style={{flex : 1}} horizontal={true} showsHorizontalScrollIndicator={false} >
                                
                            <Image style={styles.imagePromo} source={this.props.promo.promo} />
                            <Image style={styles.imagePromo} source={this.props.promo.promo} />
                            <Image style={styles.imagePromo} source={this.props.promo.promo} />
                            <Image style={styles.imagePromo} source={this.props.promo.promo} />
                            <Image style={styles.imagePromo} source={this.props.promo.promo} />
                            
                            </ScrollView>
                        </View>
                        
                    </View>
                    <View style={styles.addAdsContainer}>
                        <View>
                            <Text style={styles.addAdsText1}>
                                Owner of a Boarding House ? 
                            </Text>
                            <Text style={styles.addAdsText2}>
                                {
                                    this.props.loginUsers.id!=0? null : 'Login or Register Here'
                                }
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity 
                            onPress={
                                ()=>{
                                    this.props.loginUsers.id!=0 ? this.props.navigation.navigate('AdsForm') : this.props.navigation.navigate('LoginUser')
                                }
                            }

                            style={styles.adsLoginContainer}>
                                <Text style={styles.adsLogin}>
                                    {this.props.loginUsers.id!=0? 'Advert Here' : 'Login'}

                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.popularTownContainer}>
                        <Text style={styles.popularTownText}>Popular Town
                        </Text>
                        
                        <View style={styles.popularScrollContainter}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {this.props.popularTown.map((data)=>{
                                   return(
                                <TouchableOpacity key={data.id} style={styles.touchableContainer} >
                                    <ImageBackground borderRadius={10} source={data.popular} style={styles.imagePopular} >
                                        <Text style={styles.popularText}>
                                            {data.name}
                                        </Text>
                                    </ImageBackground>     
                                </TouchableOpacity>
                                   )
                               })}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

header = (state)=>{
    return{
        navigator : state.navigator,
        promo : state.promo,
        popularTown : state.popularTown,
        loginUsers : state.login,
        list : state.list
    }
}


export default connect(header,{showlist})(MainContent);

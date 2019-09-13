import React, {Component} from 'React';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';
import {houses, apartment, services, career} from '../../Src/Actions/index'

import styles from './HeaderStyle';

class Header extends Component{
    
    render(){
       
        return(
            <View style={styles.logo}>
                <View style={styles.icoContainer}>
                    <Image source={require('../../assets/inu.png')}  style={styles.icoHeader}/>
                    <Text style={styles.wordHeader}>DoggoKost</Text>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity 
                    style={[styles.icoNav,
                    this.props.navigator.mainNav == 'Houses' ? styles.activeIcon : null
                    ]}   
                    onPress={
                        this.props.houses
                    }
                    >
                        <Image 
                        source={require('../../assets/cardboard.png')} 
                        style={[styles.imageNav]}
                        />
                        <Text style={styles.textNav}>
                            {this.props.navigator.mainNav=='Houses' ? this.props.navigator.mainNav : null}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icoNav,
                    this.props.navigator.mainNav == 'Apartment' ? styles.activeIcon : null
                    ]}
                    onPress={
                        this.props.apartment
                    }
                    >
                        <Image 
                        source={require('../../assets/apartmen.png')}
                        style={styles.imageNav}
                        />
                        <Text style={styles.textNav} >
                        {this.props.navigator.mainNav== 'Apartment'? this.props.navigator.mainNav : null}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icoNav,
                    this.props.navigator.mainNav == 'Career' ? styles.activeIcon : null
                    ]}
                    onPress={
                        this.props.career
                    }>
                        <Image 
                        source={require('../../assets/career.png')}
                        style={styles.imageNav}
                        />
                        <Text style={styles.textNav} >
                        {this.props.navigator.mainNav== 'Career' ? this.props.navigator.mainNav : null}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icoNav,
                    this.props.navigator.mainNav == 'Services' ? styles.activeIcon : null
                    ]}
                    onPress={
                        this.props.services
                    }
                    >
                        <Image 
                        source={require('../../assets/services.png')} 
                        style={styles.imageNav}
                        />
                        <Text style={styles.textNav} >
                        {this.props.navigator.mainNav== 'Services' ? this.props.navigator.mainNav : null}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </View>
        )
    }
}

header = (state)=>{
    return{
        
        navigator : state.navigator
    }
}


export default connect(header,{houses, apartment, career, services})(Header);

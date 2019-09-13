import React, {Component} from 'React';
import {View,TouchableOpacity,Text} from 'react-native';

import styles from './FooterStyle';

import {connect} from 'react-redux';
import {explore,whislist,chat,profile} from '../../Src/Actions/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';






class Footer extends Component{
    
    render(){
        


      console.log(this.props.navigation)
        
        return(
            <View style={styles.footerContainer} >
                <TouchableOpacity
                onPress={this.props.explore}
                style={styles.footText}>
                    <FontAwesome name="search" color={this.props.footer.footNav == 'explore' ? '#0cf' : '#aaa'} 
                    style={[styles.footIcon,{fontWeight : '100'}]} />
                    <Text style={[styles.footerText,this.props.footer.footNav == 'explore' ? {color :'#0cf'} : null]} >Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={this.props.whislist}
                style={styles.footText} >
                    <FontAwesome name="heart-o" color={this.props.footer.footNav == 'whislist' ? '#0cf' : '#aaa'} style={styles.footIcon} />
                    <Text style={[styles.footerText,this.props.footer.footNav == 'whislist' ? {color :'#0cf'} : null]} >Whislist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.props.chat}
                style={styles.footText} >
                    <MaterialIcons name="chat-bubble-outline" color={this.props.footer.footNav == 'chat' ? '#0cf' : '#aaa'} style={styles.footIcon} />
                    <Text style={[styles.footerText,this.props.footer.footNav == 'chat' ? {color :'#0cf'} : null]} >Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={
                    (this.props.profile,
                    ()=>this.props.navigation.navigate('LoginUser'))
                }
                style={styles.footText} >
                    <MaterialIcons name="person-outline" color={this.props.footer.footNav == 'profile' ? '#0cf' : '#aaa'} style={styles.footIcon} />
                    <Text 
                    style={[styles.footerText,this.props.footer.footNav == 'profile' ? {color :'#0cf'} : null]} >Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

footer = (state)=>{
    return{
        footer : state.footer,
        loginUser : state.login
    }
}


export default connect(footer,{explore,whislist,chat,profile})(Footer);

import React , {Component} from 'React';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../Src/Reducers'
import LoginUser from './LoginUser'
import Axios from 'axios';
const store = createStore(reducers);

class LoginUsers extends Component{
    render(){
        return(

           
                <View style={{flex:1}}>
                    <LoginUser navigation={this.props.navigation}  />
                </View>
           

        )
    }
}

export default LoginUsers;

import React , {Component} from 'React';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../Src/Reducers'
import RegisterUser from './RegisterUser'

const store = createStore(reducers);

class RegisterUsers extends Component{
    render(){
        return(

            
                <View style={{flex:1}}>
                    <RegisterUser navigation={this.props.navigation}  />
                </View>
            

        )
    }
}

export default RegisterUsers;

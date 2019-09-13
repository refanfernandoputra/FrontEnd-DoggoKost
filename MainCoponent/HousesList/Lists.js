import React , {Component} from 'React';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../Src/Reducers'
import List from './List'
import Axios from 'axios';
const store = createStore(reducers);

class Lists extends Component{
    render(){
        return(

           
                <View style={{flex:1}}>
                    <List navigation={this.props.navigation}  />
                </View>
           

        )
    }
}

export default Lists;

import React , {Component} from 'React';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../Src/Reducers'
import AdsForm from './AdsForm';

const store = createStore(reducers);

class AdsForms extends Component{
    render(){
        return(

            
                <View style={{flex:1}}>
                    <AdsForm  navigation={this.props.navigation} />
                </View>
            

        )
    }
}

export default AdsForms;

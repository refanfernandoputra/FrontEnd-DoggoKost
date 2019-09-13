import React , {Component} from 'React';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../Src/Reducers'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const store = createStore(reducers);

class Home extends Component{
    render(){
        return(
        <View style={{flex:1}}>

                <View style={{flex:1.8}}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={{flex:7.2}}>
                    <MainContent navigation={this.props.navigation} />
                </View>
                <View style={{flex : 1}}>
                    <Footer navigation={this.props.navigation} />
                </View>
        </View>

        )
    }

    


}



export default Home;

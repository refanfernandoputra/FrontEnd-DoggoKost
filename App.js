import React, {Component} from 'React';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Src/Reducers'


import Home from './MainCoponent/Home/Home';
import LoginUsers from './MainCoponent/Login/LoginUsers';
import RegisterUsers from './MainCoponent/Register/RegisterUsers';
import AdsForms from './MainCoponent/AddAds/AdsForms';
import Lists from './MainCoponent/HousesList/Lists';


const MainNavigator = createAppContainer(createStackNavigator({
    Home :{
      screen : Home,
      navigationOptions :{
        header : null
      }
    },
    LoginUser : {
      screen : LoginUsers,
      navigationOptions :{
        header : null
      }
    },
    RegisterUser : {
      screen : RegisterUsers,
      navigationOptions : {
        header :null
      }
    },
    AdsForm : {
      screen : AdsForms,
      navigationOptions : {
        header : null
      }
    },
    Lists : {
      screen : Lists,
      navigationOptions : {
        header : null
      }
    }
}))








export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <MainNavigator navigation={this.props.navigation} />
      </Provider>
    );
  }
}













// const store = createStore(reducers);

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <MainNavigator />
//       </Provider>
//     );
//   }
// }
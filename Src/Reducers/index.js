import {combineReducers} from 'redux';
import navigatorReducer from './navigatorReducer'
import promoReducer from './promoReducer'
import popularTownReducer from './popularTownReducer'
import footerReducer from './footerReducer'
import loginReducer from './loginReducers'
import listReducer from './listReducer'

export default combineReducers({
    navigator : navigatorReducer,
    promo : promoReducer,
    popularTown : popularTownReducer,
    footer : footerReducer,
    login : loginReducer,
    list : listReducer
});
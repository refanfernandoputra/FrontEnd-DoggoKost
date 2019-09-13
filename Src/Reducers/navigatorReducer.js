import {HEADHOUSES, HEADAPARTMENT, HEADCAREER, HEADSERVICES} from '../Actions/type'

const navigator = {
     mainNav :   'Houses'
    
}

export default (state=navigator , action)=>{
    switch (action.type) {
        case HEADHOUSES:
            return {
                ...state,
                mainNav : 'Houses'
            }
        case HEADAPARTMENT:
            return {
                ...state,
                mainNav : 'Apartment'
            }
        case HEADCAREER : 
            return {
                ...state,
                mainNav : 'Career'
            }
        case HEADSERVICES : 
            return {
                ...state,
                mainNav : 'Services'
            }
        default:
            return state

    }
}
import {EXPLORE, WHISLIST, CHAT, PROFILE} from '../Actions/type'

const footer = {
     footNav :   'explore'
    
}

export default (state=footer , action)=>{
    switch (action.type) {
        case EXPLORE:
            return {
                ...state,
                footNav : 'explore'
            }
        case WHISLIST:
            return {
                ...state,
                footNav : 'whislist'
            }
        case CHAT : 
            return {
                ...state,
                footNav : 'chat'
            }
        case PROFILE : 
            return {
                ...state,
                footNav : 'profile'
            }
        default:
            return state

    }
}
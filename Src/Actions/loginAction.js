import {LOGIN,LOGOUT} from './type'


export const login = (receivedData)=> {
    return{
        type : LOGIN,
        payload : receivedData

    }
}

export const logout = (receivedData)=> {
    return{
        type : LOGOUT,
        payload : receivedData

    }
}

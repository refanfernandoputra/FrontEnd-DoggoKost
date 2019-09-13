import {LIST} from './type'


export const showlist = (receivedData)=> {
    return{
        type : LIST,
        payload : receivedData

    }
}


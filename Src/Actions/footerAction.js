import {EXPLORE, WHISLIST, CHAT, PROFILE,} from './type'


export const explore = ()=> {
    return{
        type : EXPLORE
    }
}

export const whislist =()=>{
    return{
        type : WHISLIST
    }
}
export const chat = ()=>{
    return{
        type : CHAT
    }
}
export const profile = ()=>{
    return{
        type : PROFILE
    }
}
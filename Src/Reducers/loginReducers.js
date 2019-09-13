import {LOGIN} from '../Actions/type'

const loginProfile = {
     id :   0,
     email : '',
     password : '',
     name : '',
     gender :'',
     phoneNumber : '',
     job : '',
    
}

export default (state=loginProfile , action)=>{
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                id : action.payload.id,
                email : action.payload.email,
                password : action.payload.password,
                name : action.payload.name,
                gender : action.payload.gender,
                phoneNumber : action.payload.phoneNumber,
                job : action.payload.phoneNumber
            }
            
        default:
            return state

    }
}
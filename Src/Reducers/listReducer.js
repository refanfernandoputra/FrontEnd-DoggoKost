import {LIST} from '../Actions/type'

const houseslist = {
     id :   0,
     userid : '',
     rentname : '',
     rentadress : '',
     town :'',
     latitude : '',
     longtitude : '',
     rentowner : '',
     phoneNumber : '',
     roomstotal : '',
     roomsleft : '',
     price : '',
     image1 : '',
     image2 : '',
     image3 : '',
    
}

export default (state=houseslist , action)=>{
    switch (action.type) {
        case LIST:
            return {
                ...state,
                id :   action.payload.id,
                userid : action.payload.userid,
                rentname : action.payload.rentname,
                rentadress : action.payload.rentadress,
                town : action.payload.town,
                latitude : action.payload.latitude,
                longtitude : action.payload.longtitude,
                rentowner : action.payload.rentowner,
                phoneNumber : action.payload.phoneNumber,
                roomstotal : action.payload.roomstotal,
                roomsleft : action.payload.roomsleft,
                price : action.payload.price,
                image1 : action.payload.image1,
                image2 : action.payload.image2,
                image3 : action.payload.image3,
            }
            
        default:
            return state

    }
}
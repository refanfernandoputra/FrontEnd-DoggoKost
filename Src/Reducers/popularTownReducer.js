
const popularTown = [
    {
        popular : require('../../assets/popularTown/bandung.jpg'),
        id : '1',
        name : 'Bandung'
    },
    {
        popular : require('../../assets/popularTown/jakarta.jpg'),
        id : '2',
        name : 'Jakarta'
    },
    {
        popular : require('../../assets/popularTown/semarang.jpg'),
        id : '3',
        name : 'Semarang'
    },
    {
        popular :require('../../assets/popularTown/surabaya.jpg'), 
        id : '4',
        name : 'Surabaya'
    },
    {
        popular :require('../../assets/popularTown/yogyakarta.jpg'),
        id : '5',
        name : 'Yogyakarta'
    }
    
]

export default (state=popularTown , action)=>{
    switch (action.type) {
        default:
            return state

    }
}
// bandung : require('../../assets/popularTown/bandung.jpg')
// jakarta : require('../../assets/popularTown/jakarta.jpg'),
//     semarang : require('../../assets/popularTown/semarang.jpg'),
//     surabaya : require('../../assets/popularTown/surabaya.jpg'),
//     yogyakarta : require('../../assets/popularTown/yogyakarta.jpg')
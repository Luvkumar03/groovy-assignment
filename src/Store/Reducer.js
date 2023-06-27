import {createStore} from "redux"
const initialState={
    users : [],
    loggedInUser : null,
    products : [{
        id:1,
        name:'abc',
        price:'5'

    },{
        id:1,
        name:'abc',
        price:'5'

    },{
        id:1,
        name:'abc',
        price:'5'

    },{
        id:1,
        name:'abc',
        price:'5'

    },{
        id:1,
        name:'abc',
        price:'5'

    },{
        id:1,
        name:'abc',
        price:'5'

    }],
    cart : []
}
const reducer =(state=initialState,action)=>{
    switch(action.type){

        case "REGISTER":
            return{
                ...state,
                users:[...state.users,action.payload]
            }

        case "LOGIN":
            return{
                ...state,
                user : action.payload
            }
        default:
            return state;
    }

}

export default createStore(reducer)
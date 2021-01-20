import { SHOW_ALL_BOOKS } from '../actions/actionTypes';

const initialProductState = {
    books:[],
    success:'',
    message:'',
    book:{},
    cart:[]
}

export default function books(state = initialProductState, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case SHOW_ALL_BOOKS:
            return{
                ...state,
                books:action.books,
                status:'success',
                message:'Books Fetched!'
            }
            
        default:
            return state;
    }
}

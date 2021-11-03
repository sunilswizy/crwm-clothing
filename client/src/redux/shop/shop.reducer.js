import { FECTCH_COLLECTION } from "./shop.types"

const initialState = {
    collections: null,
    isFeching: false,
    errMsg: ''
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case FECTCH_COLLECTION.FETCH_COLLECTIONS_REQUEST:
            return {
                ...state,
                isFeching: true
            }
        
        case FECTCH_COLLECTION.FETCH_COLLECTION_SUCCESS: 
            return {
                ...state,
                isFeching: false,
                collections: action.payload
            } 
        
        case FECTCH_COLLECTION.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isFeching: false,
                errMsg: action.payload
            }

        default:
            return state
    }
}

export default shopReducer
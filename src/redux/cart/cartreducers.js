import { TOGGLE_DROPDOWN, REMOVE_ITEM, CLEAR_CART_ITEM, NEW_ITEM  } from "./carttypes";
import { addItemToCart } from "./cart.utils"
import { removeCart } from "./cart.utils";

const initialSTate = {
    hidden: false,
    item:[]
}

const cartReduers = (state = initialSTate, action) =>{

    switch(action.type){
        case TOGGLE_DROPDOWN: 
            return{
                ...state,
                hidden: !state.hidden
            }
        case NEW_ITEM:
            return{
                ...state,
                item: addItemToCart(state.item, action.payload)
            }
        case CLEAR_CART_ITEM:
            return{
                ...state,
                item: state.item.filter(item => item.id !== action.payload.id) 
            }
        case REMOVE_ITEM:
            return{
                ...state,
                item: removeCart(state.item, action.payload)
            }

        default:{
            return state
        }
    }
}

export default cartReduers
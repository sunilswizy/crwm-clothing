import { TOGGLE_DROPDOWN, REMOVE_ITEM, CLEAR_CART_ITEM, NEW_ITEM  } from "./carttypes";

function toggleCartDropdown() {
    return {
        type: TOGGLE_DROPDOWN
    }
}

export const newItem = item => ({
        type: NEW_ITEM,
        payload: item
    })


export const clerarCartItem = item => ({
    type: CLEAR_CART_ITEM,
    payload: item
})

export const removeItem = item => ({
    type:REMOVE_ITEM,
    payload: item
})

export default toggleCartDropdown
import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.item
)

export const selectCartHidden =createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    item => item.reduce( 
        (accoumulator, cartItemQuantity) => 
        accoumulator + Number(cartItemQuantity.quantity), 0) 
)

export const selectCartPrice = createSelector(
    [selectCartItem],
    cart => cart.reduce((accoumulator, cartItemQuantity) => 
        accoumulator + cartItemQuantity.quantity * Number(cartItemQuantity.price),0) 
)
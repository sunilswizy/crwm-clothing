import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShopBag} from '../../assests/shopping-bag.svg';

import toggleCartDropdown from '../../redux/cart/cartactions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import { useSelector, useDispatch } from 'react-redux';

function CartIcon(){

    const itemCount = useSelector(selectCartItemCount)
    const dispatch = useDispatch()

    return(
       <div className="cart-icon" onClick={() => dispatch(toggleCartDropdown())}>
           <ShopBag className="shopping-icon" />
           <span className="item-count">{itemCount}</span>
       </div> 
    )
}

export default CartIcon;
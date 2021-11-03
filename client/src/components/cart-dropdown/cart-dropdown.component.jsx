import React from 'react'
import './cart-dropdown.styles.scss'
import Custombtn from '../custom-btn/custom-btn.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.selectors'
import toggleCartDropdown from '../../redux/cart/cartactions'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const CartDropdown = () =>{

    const item = useSelector(selectCartItem)
    const dispatch = useDispatch()
    const history = useHistory()


    return(
        <div className="cart-dropdown">
            {
            (item.length) ?
            <div className="cart-items">
            {
                item.map( item => {
                  return  <CartItem key={item.id} item={item} />
                })
            }
            </div>
            :
            <div className="empty">
            <span className="empty-msg">no items in cart</span>
            </div>
            }
                {
                (item.length) ?
                    (
                    <Custombtn  onClick={()=>
                        { 
                            history.push('/checkout')
                            dispatch(toggleCartDropdown())
                        }}
                        >Go to checkout !</Custombtn>
                  
                    )
                :
                    (<Custombtn smallbtn onClick={()=> 
                        {
                        history.push('/shop')
                        dispatch(toggleCartDropdown())
                    }
                    }>
                        Shop now !</Custombtn>)
                }
        </div>
    )
}


export default CartDropdown
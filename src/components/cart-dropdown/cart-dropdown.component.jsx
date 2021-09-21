import React from 'react'
import { createStructuredSelector } from 'reselect'
import './cart-dropdown.styles.scss'
import Custombtn from '../custom-btn/custom-btn.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItem } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router'
import toggleCartDropdown from '../../redux/cart/cartactions'

import {connect} from 'react-redux'


const CartDropdown = ({item,history,dispatch}) =>{
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

const mapStateToProps = createStructuredSelector({
    item: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
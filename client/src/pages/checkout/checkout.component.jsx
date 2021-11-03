import React from 'react'
import './checkout.styles.scss'
import { selectCartItem, selectCartPrice } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-btn/stripe-btn.component'

import { useSelector } from 'react-redux'

const Checkout = ()=>{

    const item = useSelector(selectCartItem)
    const total = useSelector(selectCartPrice)

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span><i className="fas fa-shopping-cart"></i> Product </span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price
                    </span>
                </div>
                <div className="header-block">
                    <span>Remove<i className="fas fa-trash"></i></span>
                </div>  
            </div>
                {
                  item.map( item => <CheckoutItem key={item.id} item={item}/> )
                }
            <div className="total">
                <span>Total: <i className="fas fa-dollar-sign"></i>{total}</span>
            </div>
            <div className="stripe-payment">
               *Please use following test credit card for Payments * 
               <br/>
               4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>

            <StripeButton price={total} />

        </div>
    )
}


export default Checkout
import React from 'react'
import './checkout-item.styles.scss'

import {connect} from 'react-redux'
import { clerarCartItem } from '../../redux/cart/cartactions'
import { removeItem } from '../../redux/cart/cartactions'
import { newItem } from '../../redux/cart/cartactions'


const CheckoutItem = ({item, clearCart, removeItem, addItem}) => {
     const {imageUrl, name, quantity, price } = item
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
                <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(item)}><i className="fas fa-sort-up"></i></div>
                  <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItem(item)}><i className="fas fa-sort-up"></i></div>
                 </span>
            <span className="price"><i className="fas fa-dollar-sign"></i>{price}</span>
            <div className="remove-button" onClick={()=> clearCart(item)}><i className="far fa-trash-alt"></i></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart : item => dispatch(clerarCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(newItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
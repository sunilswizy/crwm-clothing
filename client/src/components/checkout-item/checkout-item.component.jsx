import React from 'react'
import './checkout-item.styles.scss'

import { clerarCartItem } from '../../redux/cart/cartactions'
import { removeItem } from '../../redux/cart/cartactions'
import { newItem } from '../../redux/cart/cartactions'

import { useDispatch } from 'react-redux'

const CheckoutItem = ({item}) => {
     const {imageUrl, name, quantity, price } = item
     const dispatch = useDispatch()

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
                <span className="quantity">
                <div className="arrow" onClick={()=> dispatch(removeItem(item))}><i className="fas fa-sort-up"></i></div>
                  <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> dispatch(newItem(item))}><i className="fas fa-sort-up"></i></div>
                 </span>
            <span className="price"><i className="fas fa-dollar-sign"></i>{price}</span>
            <div className="remove-button" onClick={()=> dispatch(clerarCartItem (item))}><i className="far fa-trash-alt"></i></div>
        </div>
    )
}

export default CheckoutItem
import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux';
import {ReactComponent as ShopBag} from '../../assests/shopping-bag.svg';
import toggleCartDropdown from '../../redux/cart/cartactions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


function CartIcon({cartDropdown, itemCount}){
    return(
       <div className="cart-icon" onClick={cartDropdown}>
           <ShopBag className="shopping-icon" />
           <span className="item-count">{itemCount}</span>
       </div> 
    )
}

const mapDispatchToProps = dispatch =>({
    cartDropdown: ()=> dispatch(toggleCartDropdown())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
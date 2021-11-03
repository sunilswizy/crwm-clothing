import React from 'react'
import './collection-item.styles.scss'
import Custombtn from '../custom-btn/custom-btn.component';
import { newItem } from '../../redux/cart/cartactions';

import { useDispatch } from 'react-redux';

const CollectionItem=({item})=>{

     const {name, price, imageUrl} = item
     const dispatch = useDispatch()

    return(
    <div className="collection-item">
     <div style={{backgroundImage:`url(${imageUrl})`}} className="image"/>

     <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        </div>
        <Custombtn onClick={ ()=>dispatch(newItem(item))} cart>Add to cart</Custombtn>
    </div>)
}

export default CollectionItem

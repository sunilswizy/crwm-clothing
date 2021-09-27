import React from 'react'
import './collection-item.styles.scss'
import Custombtn from '../custom-btn/custom-btn.component';
import {connect} from 'react-redux'
import { newItem } from '../../redux/cart/cartactions';


const CollectionItem=({item, newItem})=>{

     const {name, price, imageUrl} = item

    return(
    <div className="collection-item">
     <div style={{backgroundImage:`url(${imageUrl})`}} className="image"/>

     <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        </div>
        <Custombtn onClick={ ()=> newItem(item)} cart>Add to cart</Custombtn>
    </div>)
}

const mapDispatchToProps = dispatch =>({
        newItem : (item)=> dispatch(newItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

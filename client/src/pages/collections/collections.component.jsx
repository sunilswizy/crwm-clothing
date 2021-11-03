import React from 'react'
import './collections.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component'

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';


const CollectionsPage = ()=>
{
    const {collectionId} = useParams()
    const collection = useSelector(selectCollection(collectionId))
    
    const {title, items} = collection

    return(
    <div className="collection-page">
        <h1 className="collection-title">{title.toUpperCase()}</h1>
        <div className="items">
              { 
            items.map((item) => 
             <CollectionItem  key={item.id} item={item}/>
        )}
        </div>
    </div>
)}


export default CollectionsPage
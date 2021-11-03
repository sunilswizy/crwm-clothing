import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

import { useHistory } from 'react-router';

const CollectionPreview=({title, items, routeName})=>{
    const history = useHistory()
    return(
    <div className="collection-preview">
        <div onClick={() => history.push(`/shop/${routeName}`)} className="heading">
            <h1 className="title">{title.toUpperCase()}</h1>
        </div>
    <div className="preview">
        {
            items.filter((item, index) => index < 4 )
            .map( item =>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
    </div>
</div>
)}


export default CollectionPreview;
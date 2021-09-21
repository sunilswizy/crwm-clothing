import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router';

import './collection-preview.style.scss';

const CollectionPreview=({id,title,items,history})=>{
    console.log(history)
    return(
<div className="collection-preview">
    <div onClick={() => history.push(`/shop/${title}`)} className="heading">
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


export default withRouter(CollectionPreview);
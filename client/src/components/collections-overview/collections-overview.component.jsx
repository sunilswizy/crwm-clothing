import React from 'react'

import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

import { useSelector } from 'react-redux'

const CollectionsOverview = () => {
     const collections = useSelector(selectCollectionForPreview)
    return(
    <div className="collections-overview">
        {
        collections.map( ({id,...otherprops}) => 
            <CollectionPreview key={id} {...otherprops}/>
        )
        }
    </div>
)
}

export default CollectionsOverview
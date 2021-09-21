import React from 'react'
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPage from '../../pages/collections/collections.component';


const ShopPage = ({match})=>
{ 
    return(
    <div className="shop-list">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionsPage}/>
    </div>
)}


export default ShopPage
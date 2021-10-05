import React from 'react'
import {Route} from 'react-router-dom'

import fetchCollectionsAsync from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

import CollectionPageContainer from '../../pages/collections/collections.container';
import CollectionOverviewContainer from '../collections-overview/collection-overview.container';

import { useEffect } from 'react';

const ShopPage = ( {fetchCollectionsAsync, match}) => {

    useEffect(()=> {
       fetchCollectionsAsync();
    }, [fetchCollectionsAsync])

    return(
    <div className="shop-list">
        <Route exact 
         path={`${match.path}`} 
         component = {CollectionOverviewContainer}
        />

        <Route 
          path={`${match.path}/:collectionId`} 
          component = {CollectionPageContainer}
        />
    </div>
    )}


const mapDispatchToProps =  dispatch  => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
import React, {lazy, Suspense} from 'react'
import {Route} from 'react-router-dom'

import fetchCollectionsAsync from '../../redux/shop/shop.actions';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../spinner/spinner.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

const CollectionPageContainer = lazy(() => import('../../pages/collections/collections.container'))
const CollectionOverviewContainer = lazy(() => import('../collections-overview/collection-overview.container'))

const ShopPage = ({match}) => {

    const dispatch = useDispatch()

    useEffect(()=> {
       dispatch(fetchCollectionsAsync());
    }, [dispatch])

    return(
    <div className="shop-list">
      <ErrorBoundary>
      <Suspense fallback={<Spinner/>}>
        <Route exact 
         path={`${match.path}`} 
         component = {CollectionOverviewContainer}
        />

        <Route 
          path={`${match.path}/:collectionId`} 
          component = {CollectionPageContainer}
        />
      </Suspense>
     </ErrorBoundary>
    </div>
    )}


export default ShopPage
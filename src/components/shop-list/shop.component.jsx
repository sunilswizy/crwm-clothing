import React from 'react'
import {Route} from 'react-router-dom'

import { fetchCollectionRequest } from '../../redux/shop/shop.saga';

import { connect } from 'react-redux';

import CollectionPageContainer from '../../pages/collections/collections.container';
import CollectionOverviewContainer from '../collections-overview/collection-overview.container';

class ShopPage extends React.Component{
    componentDidMount(){
       const {fetchCollectionRequest} = this.props
       fetchCollectionRequest()
    }

    render(){ 
        const {match} = this.props
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
}


const mapDispatchToProps =  dispatch  => ({
    fetchCollectionRequest: () => dispatch(fetchCollectionRequest())
})

export default connect(null, mapDispatchToProps)(ShopPage)
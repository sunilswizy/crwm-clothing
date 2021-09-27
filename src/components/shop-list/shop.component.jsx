import React from 'react'
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPage from '../../pages/collections/collections.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utill';

import { connect } from 'react-redux';
import updateCollection from '../../redux/shop/shop.actions';

import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage)

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    unSubscribeFromShapshop = null;

    componentDidMount(){
        const {updateCollection} = this.props
        
        const colletionRef = firestore.collection('collections')

        colletionRef.get().then(
            (snapShot => {
                const collectionMap = convertCollectionSnapshotToMap(snapShot)
                 updateCollection(collectionMap)
                 this.setState({loading:false})
             })
        )
    }

    render(){ 
        const {match} = this.props
        const {loading} = this.state
    return(
    <div className="shop-list">
        <Route exact path={`${match.path}`} 
        render = {
            (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
            }/>
        <Route path={`${match.path}/:collectionId`} 
        render = {
            (props) => <CollectionsPageWithSpinner isLoading={loading} {...props}/>
        }
        />
    </div>
    )}
}

const mapDispatchToProps =  dispatch  => ({
    updateCollection: (collectionMap) => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
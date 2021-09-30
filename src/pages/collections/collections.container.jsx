import { connect } from "react-redux";

import { compose } from "redux";

import CollectionsPage from './collections.component'

import { createStructuredSelector } from "reselect";
import { selectIsCollectionIsLoaded } from "../../redux/shop/shop.selector";

import withSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector ({
    isLoading: selectIsCollectionIsLoaded
})

const CollectionPageContainer = compose (
    connect(mapStateToProps),
    withSpinner)
    (CollectionsPage)

export default CollectionPageContainer
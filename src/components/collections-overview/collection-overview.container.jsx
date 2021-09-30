import withSpinner from "../with-spinner/with-spinner.component";

import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { selectFetching } from "../../redux/shop/shop.selector";

import collectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectFetching
  })
  
const CollectionOverviewContainer = compose( 
    connect(mapStateToProps),
    withSpinner)
    (collectionsOverviewComponent);

    // connect(mapStateToProps)(withSpinner(collectionsOverviewComponent))

export default CollectionOverviewContainer;
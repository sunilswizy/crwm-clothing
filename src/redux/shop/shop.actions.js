import { FECTCH_COLLECTION } from "./shop.types"

import { firestore } from "../../firebase/firebase.utill"
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utill"


const fetchCollectionRequest = () => ({
        type : FECTCH_COLLECTION.FETCH_COLLECTIONS_REQUEST
})

const fetchCollectionSuccess = (collection) => ({
        type: FECTCH_COLLECTION.FETCH_COLLECTION_SUCCESS,
        payload: collection
})

const fetchCollectionFailure = (errMsg) => ({
        type: FECTCH_COLLECTION.FETCH_COLLECTION_FAILURE,
        payload: errMsg
})


const fetchCollectionsAsync = () => {
        return dispatch => {

        const colletionRef = firestore.collection('collections')
        dispatch(fetchCollectionRequest())


        colletionRef.get().then(
            snapShot => {
                const collectionMap = convertCollectionSnapshotToMap(snapShot)
                 dispatch(fetchCollectionSuccess(collectionMap)) 
            })
         .catch( errMsg => {
                 dispatch(fetchCollectionFailure(errMsg))
         })      
        }
} 



export default fetchCollectionsAsync
import {takeEvery} from 'redux-saga/effects'

import { FECTCH_COLLECTION } from './shop.types'


export function* fetchCOllectionAsync() {
    yield console.log('Reduc saga');
}


export function* fetchCollectionRequest() {
    yield takeEvery(
        FECTCH_COLLECTION.FETCH_COLLECTIONS_REQUEST,
        fetchCOllectionAsync
    )
}
import { createSelector } from "reselect"
import { memoize } from "lodash"

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collection => collection ? Object.keys(collection).map(key => collection[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
  )
);

export const selectFetching = createSelector(
  [selectShop],
  shop => shop.isFeching
)

export const selectIsCollectionIsLoaded = createSelector(
  [selectShop],
  shop => !(!! shop.collections)
)
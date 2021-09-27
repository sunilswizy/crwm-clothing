import { UPDATECOLLECTION } from "./shop.types";

const updateCollection = collection => ({
        type : UPDATECOLLECTION,
        payload: collection
})

export default updateCollection
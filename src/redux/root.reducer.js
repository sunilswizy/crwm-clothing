import userReducer from "./users/user.reducer";
import cartReduers from "./cart/cartreducers";
import directoryReducer from "./Directory/directory.reducers";
import shopReducer from "./shop/shop.reducer";

import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";


import { combineReducers } from "redux";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReduers,
    directory: directoryReducer,
    shop: shopReducer
    })

export default persistReducer(persistConfig, rootReducer);
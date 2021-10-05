import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import {persistStore} from "redux-persist";

import rootReducer from "./root.reducer";

import thunk from "redux-thunk";

const middleware = [thunk]

if( process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)

export default  store;

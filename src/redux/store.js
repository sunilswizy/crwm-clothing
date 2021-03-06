import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./root.reducer";

const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)

export default  store;

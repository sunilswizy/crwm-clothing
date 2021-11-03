import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import ScrollToTop from 'react-router-scroll-top'
import * as serviceWorker from './serviceWorkerRegistration'



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
  <ScrollToTop>
  <App />
  </ScrollToTop>
  </PersistGate>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.register();



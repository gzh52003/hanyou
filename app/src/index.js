import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config'
import store from './store';
const Router = process.env.NODE_ENV === "product" ? BrowserRouter : HashRouter

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

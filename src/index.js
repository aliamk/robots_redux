import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux' // Connect redux to the react app
import { createStore, applyMiddleware, combineReducers } from 'redux' // connect action/reducer to store
import { searchRobots, requestRobots } from './reducers' //Bc theres only one reducer
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'  //To handle async in Redux
import App from './containers/App'
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


// Middleware for debugging in Redux
const logger = createLogger()

// Combine all the reducers into one variable: rootReducer
const rootReducer = combineReducers({ searchRobots, requestRobots })

// Assign the rootReducer to a variable called store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// Now pass store to the App as a prop
ReactDOM.render(
   <Provider store={ store }> {/* all the rootReducers are passed to App in object store */}
     <App />
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

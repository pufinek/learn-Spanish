import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

//import comments from './data/comments';
//import posts from './data/posts';
import settings from './data/settings';
//import dictionary from './data/dictionary';
import {codeString} from './helpers/dictionary';

/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const defaultState = {
  settings
};

const loggerMiddleware = createLogger();

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}



const middleware = applyMiddleware(
  logger, 
  thunkMiddleware,// lets us dispatch() functions, asynch fce for Firebase
  loggerMiddleware, // neat middleware that logs actions
  //enhancers,


  );
const store = createStore(rootReducer, defaultState, middleware);

//const store = createStore(rootReducer, defaultState, enhancers);

store.subscribe(() => {
  console.log("store changed", store.getState());
})


/*store.dispatch({type:'ADD_NEW_WORD', newWord:pokusWord});
store.dispatch({type:'REMOVE_WORD', index:3 });
store.dispatch({type:'UPDATE_WORD', index:1, updatedWord:pokusWord })*/

// we export history because we need it in `spanish.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

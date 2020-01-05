// store.js

import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// // import services from '../services';
// // import DevTools from '../DevTools';

//   export function configureStore(initialState = {cardDetails: [], allCardDetails: {}}) {
//     const store = createStore(reducers, initialState , compose(
//       applyMiddleware(thunk),
//       // DevTools.instrument()
//       // window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
//     ));
//     return store;
//   };

//   export const store = configureStore();

  // store.dispatch({type: 'GET_CARD_DATA'});


  export function configureStore() {
    const store = createStore(reducers, compose(
      applyMiddleware(thunk),
      // DevTools.instrument()
      // window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    ));
    return store;
  };
  export const store = configureStore();

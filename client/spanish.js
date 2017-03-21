/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Dictionary from './components/Dictionary';
import WordDetail from './components/WordDetail';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store, { history } from './store';


/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dictionary}></IndexRoute>
        <Route path="/view/:wordKey" component={WordDetail}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router,  document.getElementById('root'));


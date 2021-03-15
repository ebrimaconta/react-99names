import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store, persistor } from './reducers/store';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-139972905-1');
ReactGA.pageview(window.location.pathname + window.location.search);
import { PersistGate } from 'redux-persist/integration/react';
console.log(persistor);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

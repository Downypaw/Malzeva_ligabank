import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import App from './components/app/app';
import './scss/style.scss';
import {createAPI} from './api';
import {fetchRates} from './store/api-action';
import {formatDate} from './util';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

store.dispatch(fetchRates(formatDate(new Date())));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

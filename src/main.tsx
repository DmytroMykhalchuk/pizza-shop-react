import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '../src/store/store';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './configs/i18n/i18nextConf';
import './index.css';

if (import.meta.env.VITE_REACT_APP_STRICT_MODE === '1') {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode >
  );
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
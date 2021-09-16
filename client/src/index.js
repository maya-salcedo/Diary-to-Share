import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { ThemeContextProvider } from '../src/context/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContextProvider>
  </Provider>,
  document.getElementById('root')
);

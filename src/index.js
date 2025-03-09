import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/RD_App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store.js'

// Get the container div
const containerElement = document.getElementById('app-container')

if (containerElement) {
  ReactDOM.createRoot(containerElement).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>)
} else {
  console.error("App container element not found!");
}

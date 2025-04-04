import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/RD_App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store.js'
import ToggleColormode from './utils/ToggleColormode.jsx';
// Get the container div
const containerElement = document.getElementById('app-container')

if (containerElement) {
  ReactDOM.createRoot(containerElement).render(
    <Provider store={store}>
      <ToggleColormode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColormode>
    </Provider>)
} else {
  console.error("App container element not found!");
}

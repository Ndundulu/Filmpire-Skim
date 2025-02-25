import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Get the container div
const containerElement = document.getElementById('app-container')

if (containerElement) {
  const reactRoot = ReactDOM.createRoot(containerElement);
  reactRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
} else {
  console.error("App container element not found!");
}

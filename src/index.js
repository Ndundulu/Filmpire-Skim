import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/RD_App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Get the container div
const containerElement = document.getElementById('app-container')

if (containerElement) {
  ReactDOM.createRoot(containerElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
} else {
  console.error("App container element not found!");
}

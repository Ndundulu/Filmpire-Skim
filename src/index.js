import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Get the container div
const containerElement = document.getElementById('app-container')

if (containerElement) {
  const reactRoot = ReactDOM.createRoot(containerElement);
  reactRoot.render(<App />);
} else {
  console.error("App container element not found!");
}

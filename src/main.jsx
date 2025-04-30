import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // App handles routing

let root;

if (document.getElementById('rootForMF1')) {
  const rootElement = document.getElementById('rootForMF1');

  if (!root) {
    root = ReactDOM.createRoot(rootElement);
  }

  root.render(
    <BrowserRouter>
      <App
        userId={42}
        onButtonClick={(msg) => console.log('From Dev:', msg)}
      />
    </BrowserRouter>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';
import Index from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();

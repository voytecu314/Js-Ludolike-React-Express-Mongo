import React from 'react';
import ReactDOM from 'react-dom/client';
import MyProvider from './Context/MyProvider';
import App from './App';
import './Index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);

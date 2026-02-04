import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("App component rendered");
console.log("App component rendered test0");
console.log("App component rendered test1");
console.log("App component rendered test2");
console.log("App component rendered test3");
console.log("App component rendered test4");
console.log("App component rendered test5");








root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

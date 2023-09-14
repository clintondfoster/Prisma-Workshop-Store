import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { Provider } from 'react-redux';
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
// import Nav from "./components/Nav";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Nav/> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

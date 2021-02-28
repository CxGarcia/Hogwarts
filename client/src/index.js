import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Common/Footer/Footer';
import Nav from './components/Common/Nav/Nav';
import Checkout from './components/Checkout/Checkout';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Checkout />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

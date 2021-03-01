import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Router } from "@reach/router";
import Home from './components/Home/Home';
import Footer from './components/Common/Footer/Footer';
import Nav from './components/Common/Nav/Nav';
import Checkout from './components/Checkout/Checkout';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';


ReactDOM.render(
  <>
    <Nav />
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <SignUp path="/signUp" />
      <Checkout path="/checkout" />
    </Router>
    <Footer />

  </>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useState, useEffect, FunctionComponent } from 'react';
import { Router } from '@reach/router';
import jwt_decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/Home';
import Footer from './Common/Footer/Footer';
import Nav from './Common/Nav/Nav';
import Checkout from './Checkout/Checkout';
import Login from './LogIn/Login';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import Dashboard from './AdminDashboard/Dashboard';
import UserInterface from "types/user"

const axios = require('axios');

const App: React.FC<{}> = () => {

  const [orders, setOrders] = useState<any[]> ([]);
  let [totalCost, setTotalCost] = useState(0);

  //getting the logged in user if exist
  const [user, setUser] = useState<UserInterface>({});
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      axios(
        //TODO - get id from jwt_decode(jwt).id
        `http://localhost:4000/customer/${jwt_decode(jwt)}`
      ).then((res) => setUser(res.data[0]));
    }
    //getting a list of all orders to pass it to Dashboard
    axios('http://localhost:4000/orders').then((res) => {
      setOrders(res.data);
    });
  }, []);

  //getting the total cost of all orders to pass it to Dashboard
  useEffect(() => {
    if (orders.length !== 0) {
      let total = orders.reduce((total, order) => {
        return total + +order.cost;
      }, 0);
      setTotalCost(total);
    }
  }, [orders]);

  //logging out a user
  const logOut: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLElement>): void => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const Layout = (props) => (
    <div>
      <Nav user={user} logOut={logOut} />
      {props.children}
      <Footer />
    </div>
  );

  return (
    <>
      <ToastContainer />
      <Router>
        <Layout path="/">
          <Home user={user} path="/" />
          <Login path="/login" user={user} />
          <SignUp path="/signUp" />
          <Checkout path="/checkout" user={user} />
          <Profile path="/profile" />
        </Layout>
        <Dashboard
          path="/admin/:dashboard"
          user={user}
          orders={orders}
          totalCost={totalCost}
          logOut={logOut}
        />
      </Router>
    </>
  );
};


export default App;
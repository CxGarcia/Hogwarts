import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
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
import UserInterface from 'types/user';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import OrderInterface from 'types/orders';

interface JWTToken {
  id: string;
}

//Record<string, never> = empty props
const App: React.FC<Record<string, never>> = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [totalCost, setTotalCost] = useState(0);

  //getting the logged in user if exist
  const [user, setUser] = useState<UserInterface>({});
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      const { id } = jwt_decode<JWTToken>(jwt, {});
      axios(`http://localhost:4000/customer/${id}`).then((res: AxiosResponse) => setUser(res.data[0]));
    }
    //getting a list of all orders to pass it to Dashboard
    axios('http://localhost:4000/orders').then((res: AxiosResponse) => {
      setOrders(res.data);
    });
  }, []);

  //getting the total cost of all orders to pass it to Dashboard
  useEffect(() => {
    if (orders.length !== 0) {
      const total = orders.reduce((total, order) => {
        return total + Number(order.cost);
      }, 0);
      setTotalCost(total);
    }
  }, [orders]);

  //logging out a user
  const logOut: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLElement>): void => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const Layout: React.FC<{
    children: React.ReactChild | React.ReactChild[];
    path: RouteComponentProps;
  }> = ({ children }) => (
    <div>
      <Nav user={user} logOut={logOut} />
      {children}
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
        <Dashboard path="/admin/:dashboard" user={user} orders={orders} totalCost={totalCost} logOut={logOut} />
      </Router>
    </>
  );
};

export default App;

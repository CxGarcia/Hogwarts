import React from 'react';
import { Link } from '@reach/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addCustomer } from '../../Services/customersService';
import { RouteComponentProps } from '@reach/router';
import './SignUp.css';
import img from './imgs/undraw_Relaxing_at_home_re_mror.svg';
import UserInterface from 'types/user';
import CustomerInterface from 'types/customers';

interface SignUpProps {
  path: RouteComponentProps;
}

const SignUp: React.FC<SignUpProps> = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async ({ name, email, phone, location, password }: CustomerInterface) => {
    try {
      console.log('hiya');
      // const response: any = await addCustomer(name, phone, email, password, location);
      // console.log('response from signup react ==>', response);
      // localStorage.setItem('token', response.headers['x-auth-token']);
      // window.location.href = '/';
    } catch (error) {
      // if (error.response && error.response.status === 400) {
      //   toast.error('User Already Exist');
      // }
      // console.log('ERROR', error);
    }
  };

  return (
    <div className="sign-up-container">
      <img className="sign-up-img" src={img} alt="" />

      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" className="form-control" placeholder="Name" ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            ref={register({ required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="text" className="form-control" placeholder="Phone" ref={register()} />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text" className="form-control" placeholder="location" ref={register()} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref={register({ required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

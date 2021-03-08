/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from '@reach/router';
import { verifyCustomer } from '../../Services/authService';
import './Login.css';
import img from './imgs/undraw_Nature_fun_re_iney.svg';
import { toast } from 'react-toastify';

export default function Login() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async ({ email, password }) => {
		try {
			const { data: jwt } = await verifyCustomer(email, password);
			localStorage.setItem('token', jwt);
			window.location = '/';
		} catch (error) {
			if (error.response && error.response.status === 400) {
				toast.error('Invalid email or password', {
					position: toast.POSITION.TOP_LEFT,
				});
			}
			console.log('error from login react', error);
		}
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<h3>Log in</h3>

				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						className="form-control"
						placeholder="Enter email"
						ref={register({ required: true })}
					/>
					{errors.email && <span>This field is required</span>}
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Enter password"
						ref={register({ required: true })}
					/>
					{errors.password && <span>This field is required</span>}
				</div>

				<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customCheck1"
						/>
						<label className="custom-control-label" htmlFor="customCheck1">
							Remember me
						</label>
					</div>
				</div>

				<button type="submit" className="btn btn-primary btn-lg btn-block">
					Sign in
				</button>
				<p className="forgot-password text-right">
					<Link to="/signUp">Create account</Link>
				</p>

				<p className="forgot-password text-right">
					Forgot password? It is my fault
				</p>
			</form>
			<img className="login-img" src={img} alt="" />
		</div>
	);
}

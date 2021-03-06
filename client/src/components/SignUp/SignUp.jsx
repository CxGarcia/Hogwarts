import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import img from './imgs/undraw_Relaxing_at_home_re_mror.svg';
import { addCustomer } from '../../Services/customers';
import { navigate } from '@reach/router';

export default function SignUp() {
	const { register, handleSubmit, errors } = useForm();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [location, setLocation] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = async ({ name, email, phone, location, password }) => {
		setName(name);
		setEmail(email);
		setPhone(phone);
		setLocation(location);
		setPassword(password);
		try {
			const response = await addCustomer(
				name,
				phone,
				email,
				password,
				location
			);
			console.log(response);
			localStorage.setItem('token', response.headers['x-auth-token']);

			navigate('/');
		} catch (error) {
			if (error.response && error.response.status === 400) {
				alert('User Already Exist');
			}
			console.log('ERROR', error);
		}
	};

	return (
		<div className="sign-up-container">
			<img className="sign-up-img" src={img} alt="" />

			<form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
				<h3>Register</h3>
				<div className="form-group">
					<label>Name</label>
					<input
						name="name"
						type="text"
						className="form-control"
						placeholder="Name"
						ref={register({ required: true })}
					/>
					{errors.name && <span>This field is required</span>}
				</div>

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
					<label>Phone</label>
					<input
						name="phone"
						type="text"
						className="form-control"
						placeholder="Phone"
						ref={register()}
					/>
				</div>

				<div className="form-group">
					<label>Location</label>
					<input
						name="location"
						type="text"
						className="form-control"
						placeholder="location"
						ref={register()}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
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
}

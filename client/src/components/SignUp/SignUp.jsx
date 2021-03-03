import React from 'react';
// import { useForm } from 'react-hook-form';
import './SignUp.css';

export default function SignUp() {
	// const { register, handleSubmit, watch, errors } = useForm();
	// const onSubmit = (data) => console.log(data);

	return (
		<>
			<form className="registration-form">
				<h3>Register</h3>

				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" placeholder="Name" />
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
					/>
				</div>

				<div className="form-group">
					<label>Phone</label>
					<input type="text" className="form-control" placeholder="Phone" />
				</div>

				<div className="form-group">
					<label>Location</label>
					<input type="text" className="form-control" placeholder="location" />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
					/>
				</div>

				<button type="submit" className="btn btn-primary btn-lg btn-block">
					Register
				</button>
				<p className="forgot-password text-right">
					Already registered <a href="#">log in?</a>
				</p>
			</form>
		</>
	);
}

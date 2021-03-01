import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(watch('example'));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				name="example"
				defaultValue="test"
				ref={register}
				placeholder="HI"
			/>
			<input name="exampleRequired" ref={register({ required: true })} />
			{errors.exampleRequired && <span>This field is required</span>}
			<input type="submit" />
		</form>
	);
}

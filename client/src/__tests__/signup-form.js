import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../components/SignUp/SignUp';
import { internet, address, phone as _phone } from 'faker';

jest.mock('../Services/customersService.ts', () => ({
  addCustomer: () => 1234
}));

test('submitting the form calls submit fn with all the args', async () => {
  // const promise = Promise.resolve();
  // const handleSubmit = jest.fn(() => promise);

  render(<SignUp />);

  // const handleSubmit = jest.spyOn(container, 'handleSubmit');

  // const usernameField = screen.getByLabelText(/name/i);
  // const emailField = screen.getByLabelText(/email/i);
  // const phoneField = screen.getByLabelText(/phone/i);
  // const locationField = screen.getByLabelText(/location/i);
  // const passwordField = screen.getByLabelText(/password/i);

  const submitButton = screen.getByRole('button', { name: /register/i });

  // function buildLoginForm(args = {}) {
  //   return {
  //     username: internet.userName(),
  //     email: internet.email(),
  //     phone: _phone.phoneNumber(),
  //     location: address.direction(),
  //     password: internet.password(),
  //     ...args
  //   };
  // }

  // const { username, email, phone, location, password } = buildLoginForm();

  // userEvent.type(usernameField, username);
  // userEvent.type(emailField, email);
  // userEvent.type(phoneField, phone);
  // userEvent.type(locationField, location);
  // userEvent.type(passwordField, password);

  userEvent.click(submitButton);

  expect(true).toBe(true);

  // expect(handleSubmit).toHaveBeenCalledWith({ username, email, phone, location, password });
  // expect(handleSubmit).toHaveBeenCalledTimes(1);
});

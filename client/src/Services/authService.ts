import axios, { AxiosResponse } from 'axios';

const verifyCustomer = (email: string, password: string): Promise<AxiosResponse> => {
  return axios
    .post('http://localhost:4000/login', {
      email,
      password
    })
    .then((response) => {
      return response;
    });
};

export { verifyCustomer };

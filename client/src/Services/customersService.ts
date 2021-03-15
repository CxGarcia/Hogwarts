import axios, { AxiosResponse } from 'axios';

const addCustomer = (
  name: string | undefined,
  phone: string | undefined,
  email: string | undefined,
  password: string | undefined,
  location: string | undefined
): Promise<AxiosResponse> => {
  return axios.post('http://localhost:4000/signUp', {
    name,
    phone,
    email,
    password,
    location
  });
};

const getCustomers = async (): Promise<AxiosResponse | undefined> => {
  let servicesList;
  await axios('http://localhost:4000/customers').then((res) => {
    servicesList = res.data;
  });
  return servicesList;
};

export { addCustomer, getCustomers };

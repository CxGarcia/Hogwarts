import axios, { AxiosResponse } from 'axios';

const postOrder = (
  cost: number,
  paymentMethod: string,
  technicianId: number,
  customerId: number,
  serviceId: number
): Promise<AxiosResponse> => {
  return axios.post('http://localhost:4000/addOrder', {
    cost,
    paymentMethod,
    technicianId,
    customerId,
    serviceId
  });
};

export default postOrder;

import axios from 'axios';
import OrderInterface from 'types/orders';

const postOrder = (
  cost: number | undefined,
  paymentMethod: string,
  technicianId: number | undefined,
  customerId: number | undefined,
  serviceId: number | undefined
): Promise<OrderInterface> => {
  return axios.post('http://localhost:4000/addOrder', {
    cost,
    paymentMethod,
    technicianId,
    customerId,
    serviceId
  });
};

export default postOrder;

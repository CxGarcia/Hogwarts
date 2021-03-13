import CustomerInterface from './customers';
import TechnicianInterface from './technician';

export default interface OrderInterface {
  id?: number;
  cost?: number;
  paymentMethod?: string;
  customerId: number;
  technicianId: number;
  serviceId: number;
  createdAt: Date;
  Customer: CustomerInterface;
  Technician: TechnicianInterface;
}

import CustomerInterface from './customers';
import TechnicianInterface from './technician';

export default interface OrderInterface {
  id?: number;
  cost: number;
  paymentMethod?: string;
  customerId?: number;
  customerName?: string;
  customerEmail?: string;
  customerMobile?: string;
  customerAddress?: string;
  apartmentSize?: string;
  roomsCount?: number;
  orderDate?: Date;
  technicianId?: number;
  serviceId?: number;
  serviceName?: string;
  createdAt?: Date;
  Customer?: CustomerInterface;
  Technician?: TechnicianInterface;
}

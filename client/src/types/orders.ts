export default interface OrdersInterface {
  id?: number;
  cost?: number;
  paymentMethod?: string;
  customerId: number;
  technicianId: number;
  serviceId: number;
}

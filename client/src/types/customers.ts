import OrdersInterface from "./orders";
export default interface CustomerInterface {
  id?: number;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  location?: string;
  orders?:  OrdersInterface[];
}

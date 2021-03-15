import { RouteComponentProps } from '@reach/router';
import OrdersInterface from './orders';
import UserInterface from './user';
export default interface DashboardProps {
  user: UserInterface;
  orders: OrdersInterface[];
  totalCost: number;
  logOut: React.MouseEventHandler<HTMLDivElement>;
  path: RouteComponentProps;
}

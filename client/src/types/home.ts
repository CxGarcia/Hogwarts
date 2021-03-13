import { RouteComponentProps } from "@reach/router"
import UserInterface from './user'
export default interface HomeProps {
  //TODO - use User interface instead of object
  user: UserInterface;
  path: RouteComponentProps;
}
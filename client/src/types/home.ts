import { RouteComponentProps } from "@reach/router"
export default interface HomeProps {
  //TODO - use User interface instead of object
  user: object;
  path: RouteComponentProps;
}
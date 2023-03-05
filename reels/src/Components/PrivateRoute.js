import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Login from "./Login";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return <>{user ? <Component {...rest} /> : <Login />}</>;
}

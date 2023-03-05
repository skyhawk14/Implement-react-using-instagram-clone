import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Feed() {
  const { logout } = useContext(AuthContext);
  return (
    <h1>
      Welcome to feed <button onClick={logout}>Log out</button>
    </h1>
  );
}
export default Feed;

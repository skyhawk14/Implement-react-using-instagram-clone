import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import UploadFile from "./Uploadfile";

function Feed() {
  const { logout } = useContext(AuthContext);
  return (
    <h1>
      Welcome to feed <button onClick={logout}>Log out</button>
      <UploadFile />
    </h1>
  );
}
export default Feed;

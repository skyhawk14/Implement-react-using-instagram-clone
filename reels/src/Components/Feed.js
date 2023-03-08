import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import CircularStatic from "./CircularProgressWithLabel";
import UploadFile from "./Uploadfile";

function Feed() {
  const { logout } = useContext(AuthContext);

  return (
    <h1>
      Click here to <button onClick={logout}>Log out</button>
      {/* <UploadFile /> */}
      <CircularStatic value={0} />
    </h1>
  );
}
export default Feed;

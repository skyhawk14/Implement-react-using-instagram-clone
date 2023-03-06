import * as React from "react";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { storage, database } from "../firebase";
export default function Signup() {
  const store = useContext(AuthContext);

  const [email, setEmail] = useState("mani@gmail.com");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const resetError = () => {
    setTimeout(() => setError(""), 2000);
  };
  const handleClick = async () => {
    // if file is not present
    if (file === null) {
      setError("Please upload your profile image");
      resetError();
      return;
    }
    try {
      let userObj = await store.signup(email, password);
      let uid = userObj.user.uid;
      let uploadTask = storage.ref(`/users/${uid}/profileImage`).put(file);
      const fn1 = function (snapshot) {
        let transferPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${transferPercentage} done.`);
      };
      const fn2 = function (err) {
        setError(err);
        resetError();
        console.log("error");
      };
      const fn3 = function () {
        uploadTask.snapshot.ref.getDownloadURL().then(async (url) => {
          console.log(url);
          await database.users.doc(uid).set({
            email,
            userId: uid,
            fullName,
            password,
            createdAt: database.getTimeStamp(),
          });
          return navigate("/login");
        });
      };
      uploadTask.on("state_changed", fn1, fn2, fn3);
    } catch (err) {
      setError(err.toString());
      resetError();
    }
  };
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title="Instagram" className="cardHeader" />
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
              Sign up to see photos and videos of your friend
            </Typography>
            {error !== "" && <Alert severity="error">{error}</Alert>}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              fullWidth={true}
              margin="dense"
              component="label"
            >
              Upload Profile Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Button>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              fullWidth={true}
              margin="dense"
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </CardActions>
          <CardContent>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              className="typography"
            >
              By Signing up, you agree to our Terms, Data policy and cookie
              policy
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ maxWidth: 345 }}
          className="alreadyAccountLink"
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
            className="typography"
          >
            Having an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

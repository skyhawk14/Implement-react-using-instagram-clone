import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./Login.css";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const store = useContext(AuthContext);
  const [email, setEmail] = useState("mani@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  return (
    <div className="loginWrapper">
      <div className="imgCard">
        <div className="card">
          <img src={image1} alt="image1" className="overlayImage" />
        </div>
      </div>
      <div className="loginCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title="Instagram" className="cardHeader" />
          <CardContent>
            {error != "" && <Alert severity="error">{error}</Alert>}
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
            <div style={{ textAlign: "center" }}>
              <Link to="/forget" style={{ textDecoration: "none" }}>
                Forget Password?
              </Link>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              fullWidth={true}
              margin="dense"
              onClick={async () => {
                try {
                  let response = await store.login(email, password);
                  console.log(response);
                  navigate("/");
                } catch (err) {
                  setError(err.toString());
                  setTimeout(() => {
                    setError("");
                  }, 2000);
                }
              }}
            >
              Log in
            </Button>
          </CardActions>
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
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title="Instagram" className="cardHeader" />
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
              Sign up to see photos and videos of your friend
            </Typography>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
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
              <input type="file" accept="image/*" hidden />
            </Button>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              fullWidth={true}
              margin="dense"
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

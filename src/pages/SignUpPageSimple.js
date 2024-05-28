import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//added
import axiosInstance from "../axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        3D SMART FACTORY
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpPageSimple() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  // const [waitingForCode,setWaitingForCode]= useState(false) ;
  // const [code,setCode]=useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (firstName === "") {
      setFirstNameError("Please enter your first Name");
      hasErrors = true;
    }
    if (lastName === "") {
      setLastNameError("Please enter your last Name");
      hasErrors = true;
    }
    if (email === "") {
      setEmailError("Please enter your email");
      hasErrors = true;
    } else {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Please enter a valid email");
        hasErrors = true;
      }
    }
    if (password === "") {
      setPasswordError("Please enter your password");
      hasErrors = true;
    }
    if (!/^[a-zA-Z]*$/.test(firstName)) {
      setFirstNameError("Enter a valid Name");
      hasErrors = true;
    }
    if (!/^[a-zA-Z]*$/.test(lastName)) {
      setLastNameError("Enter a valid Name");
      hasErrors = true;
    }

    if (!hasErrors) {
      console.log(firstName, lastName, email, password);

      localStorage.clear(); //remove potential tokens of old sign in users
      axiosInstance
        .post(`user/register/`, {
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: password,
        })
        .then((res) => {
          //.then = succ op
          console.log(res);
          console.log(res.data);
          toast.success("Registration successful!");
          navigate(`user/confirmpage/${email}`);
        })
        .catch((error) => {
          //.catch there is error
          // Handle any errors that occur during registration
          console.error("Registration failed:", error.response.data.email);
          // You can also alert the user about the failure if needed
          //TODO handle duplicate user status code (if statuscode =409 then please login ) see in the backend
          toast.error(`${error.response.data.email}`);
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            //onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  error={firstNameError}
                  helperText={firstNameError}
                  onChange={(ev) => {
                    setFirstName(ev.target.value);
                    setFirstNameError("");
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  error={lastNameError}
                  helperText={lastNameError}
                  onChange={(ev) => {
                    setLastName(ev.target.value);
                    setLastNameError("");
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  error={emailError}
                  helperText={emailError}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                    setEmailError("");
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  error={passwordError}
                  helperText={passwordError}
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                    setPasswordError("");
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

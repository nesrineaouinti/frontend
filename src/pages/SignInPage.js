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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
//added 



const RadioGrp = ({ userType, setUserType }) => {
  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">You are:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={userType}
        onChange={handleChange}
      >
        <FormControlLabel value="candidat" control={<Radio />} label="Candidat" />
        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
      </RadioGroup>
    </FormControl>
  );
};

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


const SignInPage = () => {
  if (localStorage.getItem('access_token')) {
    //if he is already signed in and tries to access /signin Redirect the user to another page, for example, the home page  //for register as well we can do that , but for register we did local.clear() anyway when he register
    window.location.href = '/'; // Replace '/home' with your desired destination
    
}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userType, setUserType] = useState("candidat"); // Added state for radio group
  const [accessToken,setAccessToken] = useState("")
  const [refreshToken,setRefreshToken] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
        setEmailError("Please enter your email");
        return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Please enter a valid email");
        return;
    }

    if (!password) {
        setPasswordError("Please enter your password");
        return;
    }
    
    axiosInstance.post(`token/`, { email, password })
        .then((res) => {
            
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + res.data.access;
            alert("login successful!")
            navigate('/');
        })
        .catch((err) => {
            console.error('Error during authentication', err);
            alert("error")
            // You might want to handle the error visually for the user here as well
        });
};

// const handleSubmit = (e) => {
  
//   e.preventDefault();

//   if (!email) {
//       setEmailError("Please enter your email");
//       return;
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       setEmailError("Please enter a valid email");
//       return;
//   }

//   if (!password) {
//       setPasswordError("Please enter your password");
//       return;
//   }
  
//   axiosInstance.post(`token/`, { email, password })
//       .then((res) => {
        
          
//           setAccessToken(res.data.access);
//           setRefreshToken( res.data.refresh);
          
//           //jawo behy logged in succ , taw we check his role 
//           checkUserRoleAndNavigate();
         
//       })
//       .catch((err) => {
//           console.error('Error during authentication', err);
//           alert("Email or password incorrect")
          
//       });

//       const checkUserRoleAndNavigate = () => {
//          //we set the default header of the request , so user can send requests with his access token saved to his request
//         axiosInstance.get(`checkifadmin/` , {
//           headers: {
//               'Authorization': `JWT ${accessToken}`
//           }
//       })  // we will check the role from the sent access token 
//             .then((res) => {
                 
//                 if ((res.data)) {
//                   console.log(res.data)
//                   alert("login successful as Admin!")
//                   axiosInstance.defaults.headers['Authorization'] = 'JWT ' + accessToken; //we set the default header of the request , so user can send requests with his access token saved to his request

//                     navigate('/dashboard');
//                 } else {
//                   alert("login successful! as candidat")
//                     navigate('/');
//                 }
//             })
            
//             .catch((err) => {
//                 console.error('Error fetching user role', err);
//                 alert('Error identifying user type')
                 
//             });




// };}

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!email) {
//       setEmailError("Please enter your email");
//       return;
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       setEmailError("Please enter a valid email");
//       return;
//   }

//   if (!password) {
//       setPasswordError("Please enter your password");
//       return;
//   }

//   try {
//       const tokenResponse = await axiosInstance.post(`token/`, { email, password });
//       const accessToken = tokenResponse.data.access;
//       const refreshToken = tokenResponse.data.refresh;

//       setAccessToken(accessToken);
//       setRefreshToken(refreshToken);
      
//       axiosInstance.defaults.headers['Authorization'] = `JWT ${accessToken}`;

//       await checkUserRoleAndNavigate(accessToken);
//   } catch (err) {
//       console.error('Error during authentication', err);
//       alert("Email or password incorrect");
//   }
// };

// const checkUserRoleAndNavigate = async (accessToken) => {
//   try {
//       const roleResponse = await axiosInstance.get(`checkifadmin/`
//         );
//       if (!roleResponse.data) {
//         console.log(roleResponse.data);
//           alert("Login successful as Admin!");
//           navigate('/dashboard');
//       } else {
//           alert("Login successful as Candidate!");
//           navigate('/');
//       }
//   } catch (err) {
//       console.error('Error fetching user role', err);
//       alert('Error identifying user type');
//   }
// };





















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
          <Typography component="h1" variant="h5" sx={{ pb: 5 }}>
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <RadioGrp userType={userType} setUserType={setUserType} />
            <TextField
              value={email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError}
              helperText={emailError}
              onChange={(ev) => {
                setEmail(ev.target.value);
                setEmailError("");
              }}
            />
            <TextField
              value={password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passwordError} //error is a boolean, if the state passwordError is empty (we didnt find any problem)
              // then by default an empty state takes the value false =>error=false => there is no error
              helperText={passwordError}
              onChange={(ev) => {
                //onChange => ba3d mal9a error yenzel bech yekteb =>passwordError="" => error=false=> error yetna7alo
                // w ynajem yekteb fi ra7tou
                setPassword(ev.target.value);
                setPasswordError("");
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="/resetpass" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Badge, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


const defaultTheme = createTheme();


//implement the logic to only request code when user changes email or pass, name is fine without code

export default function EditProfile() {
  const Navigate=useNavigate()
  
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);



  //added
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    
    
  });

  useEffect(() => {
    axiosInstance.get('user/get/')
    .then(response => {
      const { email, first_name, last_name } = response.data;
      setUserData({
        email: email ,
        firstName: first_name ,
        lastName: last_name ,
        
      });
      
      
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });
  }, []);
  

  

  const handleSubmit = () => {
    let hasErrors = false;

    if (userData.firstName === "") {
      setFirstNameError("Please enter your first Name");
      hasErrors = true;
    }
    if (userData.lastName === "") {
      setLastNameError("Please enter your last Name");
      hasErrors = true;
    }
    
    if (password === "" && passwordTouched) {
      setPasswordError("Please enter your password");
      hasErrors = true;
    }
    if (!/^[a-zA-Z]*$/.test(userData.firstName)) {
      setFirstNameError("Enter a valid Name");
      hasErrors = true;
    }
    if (!/^[a-zA-Z]*$/.test(userData.lastName)) {
      setLastNameError("Enter a valid Name");
      hasErrors = true;
    }

    if (!hasErrors) {
      const updatedFields = {
          first_name: userData.firstName,
          last_name: userData.lastName,
      };

      // Include password in the payload only if it's been touched and is not the placeholder
      if (passwordTouched && password !== "*********") {
          updatedFields.password = password;
      }

      console.log(updatedFields); // Log the fields to be updated for verification

      axiosInstance.patch('user/update/', updatedFields)
      .then((res) => {
          toast.success('Updated successfully!');
          // Optionally reset password fields here
          setPassword("");
          setPasswordTouched(false);
      })
      .catch((error) => {
          console.error('Update failed:', error);
          toast.error(`Update failed: ${error.response ? error.response.data.detail : 'Server error'}`);
      });
  }
};

  
 
  return (

    <ThemeProvider theme={defaultTheme}>
      
        <Container component="main" maxWidth="xs">
          <CssBaseline />        {/* must write this otherwise the side bar shrinks */}
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={userData.firstName}
              src="yourImageSource"
              sx={{ width: 100, height: 100 }}
            />
            <Typography component="h1" variant="h5" sx={{ pt: 1 }}>
              Edit Profile
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid item xs={12} sx={{ pb: 2 }}>
                <TextField
                  variant="filled"
                  disabled
                  fullWidth
                  label={userData.email}
                  
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="first name"
                    autoFocus
                    value={userData.firstName}
                    error={firstNameError}
                    helperText={firstNameError}
                    onChange={(ev) => {
                      setUserData({...userData, firstName: ev.target.value});
                      setFirstNameError("");
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="last name"
                    
                    autoComplete="family-name"
                    value={userData.lastName}
                    error={lastNameError}
                    helperText={lastNameError}
                    onChange={(ev) => {
                      setUserData({...userData, lastName: ev.target.value});
                      setLastNameError("");
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
    fullWidth
    name="password"
    label="Password"
    type="password"
    autoComplete="new-password"
    value={passwordTouched ? password : "*********"}  // Show "*********" only if not touched
    error={!!passwordError}
    helperText={passwordError}
    onClick={() => {
        if (!passwordTouched) {
            setPassword("");        // Clear the placeholder password on first click
            setPasswordTouched(true); // Mark the password field as touched
        }
    }}
    onChange={(ev) => {
        setPassword(ev.target.value);  // Update the password state on change
        setPasswordError("");          // Clear any error messages
    }}
/>
                </Grid>
              </Grid>
              <Stack direction="row" justifyContent="flex-end" gap={2}>
                <Button variant="outlined" sx={{ mt: 3, mb: 2 }} onClick={()=>{Navigate(-1)}}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Save
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      
    </ThemeProvider>
  );
}

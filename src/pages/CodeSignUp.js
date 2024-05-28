
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
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function CodeSignUp(){
  const navigate=useNavigate();
  const {email} = useParams(); 
  console.log(email); 

  
const [code,setCode]=useState('')


const handleSubmitCode=(e)=>{
  e.preventDefault();
  axiosInstance.post(`user/confirm/${email}/`, {
    
    code: code,
  })
  .then((res) => {
    toast.success("Account confirmed successfully.");
    
    navigate('/signin');
  })
  .catch((error) => {
    console.error("Confirmation failed:", error);
    toast.error("Invalid confirmation code. Please try again.");
  }); }


return (

<Container  id='sendcode' maxWidth="xs" align='center' >
         <Stack
            direction="row"
            justifyContent="space-between"
            marginTop={1}
            spacing={9}
            paddingBottom={7}
          >
            
            <Button    sx={{p:0.1}} onClick={()=>{
              axiosInstance.post(`user/sendcode/${email}/`)
              .then((res) => {
                toast.success("code sent successfully , check your email")
            })
              .catch((error) => {
                console.error( error);
                toast.error("error sending code");
              }); 

            
            }} >
              Send code again
            </Button>
            <TextField
              size="small"
              variant="standard"
              label="Enter code here"
              onChange={(e)=>setCode(e.target.value)}
              value={code}
             
              
            />
          </Stack>
          <Button variant="contained"  disabled={code.length<6} onClick={handleSubmitCode}> 
              Finish sign up
            </Button>

      </Container> 
      
    )
      
    
    
    }
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
import { Badge, Card, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import axiosInstance from "../axios";
import StepperComp2 from "./stepperCom2";
import { alpha } from "@mui/material";
import NavBar from "../Components/navBar";


function formatDate(dateTimeStr) {
    const date = new Date(dateTimeStr);
    return date.toLocaleDateString(); // This will format the date based on the locale
  }
export default function Dabox(){

    const [myApplications, setMyApplications] = useState([]);
    //{ admin
       // headers: {
          // Authorization header if required
        //  'Authorization': `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNTgxODg4MiwiaWF0IjoxNzE1NzMyNDgyLCJqdGkiOiJiMDEwYjIzYmZlYmY0Y2VmYjZhZmMzNTdkN2JjOTk3MiIsInVzZXJfaWQiOjJ9.TgyppXOWeDPhoCuEzmMOn2iFR0j-1Axxr_vRqpguz0s`
       // }
     // }

    useEffect(() => {
        axiosInstance.get('applications/' ) 
            .then(response => {
                setMyApplications(response.data);
                
                
                console.log(myApplications)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                alert('Error fetching data: ', error)
                
            });
    }, []);



    

    return(
        <div>
        <NavBar/>

        <Box 
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
      })}
    >
        <Box paddingTop={15}>
        {myApplications.map((app) => (      
        <Box sx={{px:{xs:1,md:20 , lg:40}  ,pt:{xs:1}  }} >
        <Card width='100%' alignSelf='center'  >
            <Stack direction='column' >
                <Box sx={{ bgcolor: '#343a40', p: 1.5, textAlign: 'center'  }}>
                    <Typography color='white'>APPLICATION N° - {app.id}</Typography>
                </Box>



                <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ py:1,px:2,bgcolor: 'lightGrey' }}>
                    <Typography variant='h5'>{app.job_details}</Typography>
                    
                    <Typography variant='subtitle1'>{formatDate(app.created_at)}</Typography>
                </Box>
<Box padding={1.5}>
                <StepperComp2 status={app.status}/>
                </Box>
                
            </Stack>
        </Card>
        </Box>  ))}
        </Box>
        
        </Box>
        </div>

    )
}
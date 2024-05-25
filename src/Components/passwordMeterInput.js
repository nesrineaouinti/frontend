import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {  CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axios';







const PasswordMeterInput=({email}) =>{
  const [value, setValue] = React.useState(''); //c le password
  const minLength = 12;
  const navigate=useNavigate()

 



  const handleSubmit=()=>{

    axiosInstance.post('user/changepassword/', {email: email, new_password:value})
    .then((res)=>{
      alert("password updated successfully!")
      navigate("/signin")

    }
    ).catch((error)=>{
      alert("error updating your password")

    })




  }

 

  
  return (
    <CssVarsProvider>
     <Box
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    
    <Stack
      spacing={0.5}
      sx={{
        '--hue': Math.min(value.length * 10, 120),
      }}
    >
      <Input
        type="password"
        placeholder="Enter your new password"
        startDecorator={<VpnKeyIcon />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <LinearProgress
        determinate
        size="sm"
        value={Math.min((value.length * 100) / minLength, 100)}
        sx={{
          bgcolor: 'background.level3',
          color: 'hsl(var(--hue) 80% 40%)',
        }}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
      >
        {value.length < 3 && 'Very weak'}
        {value.length >= 3 && value.length < 7 && 'Weak'}
        {value.length >= 7 && value.length < 10 && 'Strong'}
        {value.length >= 10 && 'Very strong'}
      </Typography>
    </Stack>
    
    <Box paddingTop={4} >                  {/* Button tet7atl ken may7ot strong password puis yab3eth valeur newpass fost onNewPass.. lel main component signIn*/}
            <Button variant="outlined" fullWidth disabled={!(value.length >= 7)} onClick={handleSubmit} >
              Confirm new password
            </Button>
          </Box>
          </Box>
          </CssVarsProvider>
  );
}

export default PasswordMeterInput ;
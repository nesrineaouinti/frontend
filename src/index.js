import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApplySteps from "./Components/applySteps"
import CompInNum from './Components/CompInNum';
import { Container,Box } from '@mui/material';
import OneJob from './Components/oneJob';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PasswordMeterInput from './Components/passwordMeterInput';


import NavBar from './Components/navBar';
import Hero from './Components/hero';
import { CssBaseline } from "@mui/material";
import ExploreJobs from './Components/exploreJobs';
import Divider from '@mui/material/Divider';
import Footer from './Components/footer';
import Sidebar from './Dashboard/sidebar';
import { CssVarsProvider } from "@mui/joy/styles";
import Header from './Dashboard/Header';
import EditProfile from './EditProfiles/EditProfile';
import Tags from './pages/JobDetailsPage';
import JobDetails from './pages/JobDetailsPage';
import ModalButton from './EditProfiles/ModalButton';
import AutoSizeInput from './EditProfiles/FileUpload';
import Stack from '@mui/material/Stack'

import DashboardPage from './Dashboard/DashboardPage';
import SignUpPageSimple from './pages/SignUpPageSimple'; 
import CreateJob from './EditProfiles/CreateJob';
import SignInPage from './pages/SignInPage';
import OrderListOrig from './Dashboard/OrderListOrig';
import TableSortAndSelection from './Dashboard/OrderListOrig';

import JobsTableTest from './Dashboard/JobsTableTest';

import StepperComp2 from './StatusTracker/stepperCom2';
import ViewDetails from './BestAllCandidates/ViewDetails';
import Applicationss from './BestAllCandidates/Applications';
import EditJob from './EditProfiles/EditJob';
import ModalCv from './Dashboard/ModalCv';
import Dabox from './StatusTracker/Dabox';
import AllCandidates from './BestAllCandidates/AllCandidats';
import { alpha } from "@mui/material";
import SignUpPage from './pages/SignUpPage';
import ResetPassPage from './pages/resetPassPage';





const theme = createTheme({
  palette: {
    primary: {
      main: '#4281fa',
      light: '#fafcff'},
    
    secondary: {   //for text 
      main: '#2f2f2f',  //black by default
      light: '#A9B4CD',  },        
   
    orange :{
       main:'#DB9B10' ,
       light:'#FFF1E0'    } },
    
  typography :{
    fontFamily:'Inter'
  }});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //the CssVarprovider should be put inside the jou iu components , dont put it here in root , it conflicts with StepperComp2
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     
    
                     
      
     
      
   <App/>
     
      
      

      
      

      
      
    </ThemeProvider>
   
  </React.StrictMode>
  
);


/*<Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <JobsTable/> */

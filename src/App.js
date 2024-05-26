import { useState, useEffect,React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ApplySteps from "./Components/applySteps"
import CompInNum from './Components/CompInNum';
import { Container } from '@mui/material';
import OneJob from './Components/oneJob';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResetPassPage from './pages/resetPassPage';
import PasswordMeterInput from './Components/passwordMeterInput';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
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
import JobDetailsPage from './pages/JobDetailsPage';
import ModalButton from './EditProfiles/ModalButton';
import AutoSizeInput from './EditProfiles/FileUpload';
import Stack from '@mui/material/Stack'
import HomePage from './pages/HomePage';
import DashboardPage from './Dashboard/DashboardPage';
import CreateJob from './EditProfiles/CreateJob';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SignUpPageSimple from './pages/SignUpPageSimple';
import { useNavigate } from 'react-router-dom';
import EditJob from './EditProfiles/EditJob';
import PromotedJobs from './Components/PromotedJobs';



import './App.css';
import { Typography } from '@mui/material';
import Dabox from './StatusTracker/Dabox';
import CodeSignUp from './pages/CodeSignUp';




function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setIsLoggedOut(true);
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      navigate('/');
    }
  }, [isLoggedOut, navigate]);

  return null; // or a loading spinner until logged out
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='signup/user/confirmpage/:email' element={<CodeSignUp/> } />
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPageSimple />} />
                <Route path="/resetpass" element={<ResetPassPage />} />
                <Route path="/jobdetails/:jobId/" element={<JobDetailsPage />} />
                <Route path="/createjob" element={<CreateJob />} />
                <Route path="/myspace" element={<Dabox />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<EditProfile />} />
                <Route path="/dashboard/*" element={<DashboardPage />} /> 
                <Route path="/resetpassword" element={<ResetPassPage/>} />
                
                {/* <Route path="" element={<stepperCom/>} /> */}

                

                   
            </Routes>
        </Router>
    );
}

export default App;



/*
      <Route exact path="/" element={<DashboardPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/> */



      //LInk vs navigate , we dont use the traditional href since we are developing SPA that doesnt totally refresh the page but the component
      //button/component to be rendered ; link / logical transfer , if loged in transfer to home ; navigate 
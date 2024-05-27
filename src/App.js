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
import AllJobs from './pages/AllJobs';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import './App.css';
import { Typography } from '@mui/material';

import CodeSignUp from './pages/CodeSignUp';
import MySpace from './StatusTracker/MySpace';

import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




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
// function DjangoAdminPanel() {
//   return (
//       <iframe 
//           src="http://127.0.0.1:8000/admin"  // Adjust this URL based on your Django server
//           style={{ width: '100%', height: '800px', border: 'none' }}
//           title="Django Admin Panel"
//       />
//   );
// }
// <Route path='/admin' element={<DjangoAdminPanel/> } />


function App() {
    return (
        <Router>
          <ScrollToTop />
            <Routes>
                <Route path='signup/user/confirmpage/:email' element={<CodeSignUp/> } />
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPageSimple />} />
                <Route path="/resetpass" element={<ResetPassPage />} />
                <Route path="/jobdetails/:jobId/" element={<JobDetailsPage />} />
                <Route path="/createjob" element={<CreateJob />} />
                <Route path="/myspace" element={<MySpace />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<EditProfile />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard/*" element={<DashboardPage />} />
                </Route>
                <Route path="/resetpassword" element={<ResetPassPage/>} />
                <Route path="/jobs" element={<AllJobs/>} />

                
                

                

                   
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
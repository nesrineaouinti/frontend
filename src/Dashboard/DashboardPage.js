import * as React from 'react';
import Sidebar from './sidebar';
import Header from './Header';
import { Box } from '@mui/material';
import Layout from '../BestAllCandidates/ViewDetails';

import JobsTableTest from './JobsTableTest';
import EditProfile from '../EditProfiles/EditProfile';
import Applicationss from '../BestAllCandidates/Applications';
import EditJob from '../EditProfiles/EditJob';
import ViewDetails from '../BestAllCandidates/ViewDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateJob from '../EditProfiles/CreateJob';
import AllCandidates from '../BestAllCandidates/AllCandidats';
import Dashboard from './Dashboard';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



export default function DashboardPage() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <Header />
            <Routes>

                 
                <Route path="" element={<Dashboard />} />
                <Route path="jobs" element={<JobsTableTest />} />
                <Route path="editjob/:jobId" element={<EditJob />} />
                <Route path="viewdetails/:jobId" element={<ViewDetails />} />
                <Route path="postjob" element={<CreateJob />} />
                <Route path="editprofile" element={<EditProfile />} />
                <Route path="allapplications" element={<AllCandidates />} />

            </Routes>
            <ToastContainer />
        </Box>
    );
}
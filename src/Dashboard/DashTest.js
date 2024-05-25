import * as React from 'react';
import Sidebar from './sidebar';
import Header from './Header';
import { Box } from '@mui/material';
import Layout from '../BestAllCandidates/ViewDetails';
import SignUpPage from '../pages/SignUpPage';
import JobsTableTest from './JobsTableTest';
import EditProfile from '../EditProfiles/EditProfile';
import Applicationss from '../BestAllCandidates/Applications';
import EditJob from '../EditProfiles/EditJob';
import ViewDetails from '../BestAllCandidates/ViewDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateJob from '../EditProfiles/CreateJob';
import AllCandidates from '../BestAllCandidates/AllCandidats';
import OrderListOrig from './OrderListOrig';
import ModalCv from './ModalCv';



export default function DashTest() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <Header />
            <AllCandidates/>
        </Box>
    );
}
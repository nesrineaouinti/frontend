import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import ChartComponent from "./chatLine";
import DoughnutChart from "./donghatChart";
import { CssVarsProvider } from "@mui/joy";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";

const Dashboard = () => {
  const [dataDash , setData]= useState()
    useEffect(() => {
        axiosInstance.get('statistique/')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
      }, []);
  
      
  return (
    <>
    
      <CssBaseline />

      <Box
        sx={{
          px: { xs: 1, md: 5 },
          pt: { xs: 7.5, md: 10 },
          pb: { xs: 1, md: 5 },
          
        }}
      >
    <Box>
      <Typography>Dashboard</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            sx={{
              height:'100',
              display: "flex",
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderLeft: 4,
              borderColor: "rgba(255, 99, 132, 0.2)", 
              backgroundColor: "#fff",
              borderRadius: 2,
     
              margin: "16px",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Total job
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
             {dataDash?.total_jobs}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} >
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderLeft: 4,
              borderColor: "rgba(255, 99, 132, 0.2)", // Replace 'rose' with a specific color code if 'rose' is not defined
              backgroundColor: "#fff",
              borderRadius: 2,

              margin: "16px",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Total Application
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
            {dataDash?.total_applications}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderLeft: 4,
              borderColor: "rgba(255, 99, 132, 0.2)", // Replace 'rose' with a specific color code if 'rose' is not defined
              backgroundColor: "#fff",
              borderRadius: 2,
 
              margin: "16px",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Total rejected
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
            {dataDash?.total_rejected}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderLeft: 4,
              borderColor: "rgba(255, 99, 132, 0.2)", // Replace 'rose' with a specific color code if 'rose' is not defined
              backgroundColor: "#fff",
              borderRadius: 2,

              margin: "16px",
            }}
          >
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Total Accepted
            </Typography>
            <Typography variant="h4" sx={{ color: "text.primary" }}>
            {dataDash?.total_accepted}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8} lg={8}>
          <ChartComponent  />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <DoughnutChart />
        </Grid>
      </Grid>
      </Box>
 
    </>
  );
};
export default Dashboard;

import {React,useState,useEffect} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Stack, Chip, responsiveFontSizes,Container } from "@mui/material";
import { List } from "@mui/material";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import OneJob from "./oneJob";
import ExploreJobs from "./exploreJobs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  <ScrollToTop/>



export default function PromotedJobs(){
    const [jobs, setJobs] = useState([]);
    const navigate=useNavigate();



    useEffect(() => {
        axiosInstance.get('jobs/' ) 
            .then(response => {
                const Promoted=response.data.filter(job=>job.promoted=== true);
                setJobs(Promoted);
                // alert('fetched all jobs succ')
                
                
                
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                alert('Error fetching data: ', error)
                
            });
    }, []);
    
    useEffect(() => {
      console.log(jobs);
    }, [jobs]); // Log jobs whenever it updates




    return(
        <Container>
        <ExploreJobs/>
        <OneJob jobs={jobs} />
        <Box align='center'  sx={{pt:3, pb:5}}>  <Button component={Link}
      to="/jobs" sx={{px:10}} variant='contained'>View More...</Button> </Box>
        
        </Container>




    )
}
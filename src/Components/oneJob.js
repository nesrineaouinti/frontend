import {React,useState,useEffect} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Stack, Chip, responsiveFontSizes } from "@mui/material";
import { List } from "@mui/material";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";

function formatDate(dateTimeStr) {
  const date = new Date(dateTimeStr);
  return date.toLocaleDateString(); }


export default function OneJob({jobs}) {
  const navigate=useNavigate();
  
  console.log(jobs)

  
//   const [jobs, setJobs] = useState([]);


//   useEffect(() => {
//     axiosInstance.get('jobs/' ) 
//         .then(response => {
//             setJobs(response.data);
            
            
            
//         })
//         .catch(error => {
//             console.error('Error fetching data: ', error);
//             alert('Error fetching data: ', error)
            
//         });
// }, []);

// useEffect(() => {
//   console.log(jobs);
// }, [jobs]); // Log jobs whenever it updates
if (!jobs) {
  return <Box align='center' padding={10}>Loading...</Box>; // Or any other loading indicator
}

  return (
    <List
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", //change this to edit the width of the cards
      gap: 2,
    }}
  >

             
{jobs.map((job) => (
    <Card key={job.id}>
      <CardContent align='left'>
        <Typography sx={{fontSize:24 , color:'#1E1E1E',fontWeight:450}}>{job.title}</Typography>

<Stack direction='row' justifyContent='space-between'>
        <Stack direction="row" spacing={1} paddingBottom={3}> 
          {job.skills.split(',').map((skill)=> (
          <Chip variant='outlined' label={skill} color="warning" size="small" />))}
          
        </Stack>
        <Typography style={{fontSize:16}} >{formatDate(job.created_at)}</Typography>
        </Stack>

        <Typography style={{color:'#A9B4CD' ,fontSize:16 }} >{job.summary}</Typography>
      


      <Stack paddingTop={5}
        direction="row"
        alignItems="center"
        justifyContent='space-between'

      >
        <Typography color='primary.main' style={{ fontSize:20}}>{job.salary}$ <span style={{color:'#1E1E1E', fontSize:14}}>/month</span></Typography>
        <Button size='meduim' variant='outlined' onClick={()=>{  navigate(`/jobdetails/${job.id}`)}} >Apply Now</Button>
        



        
      </Stack>
      </CardContent>
    </Card> ))} 
    
    </List>
  );
}

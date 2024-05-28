import { React } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Badge, Stack, Card } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { TextareaAutosize, InputAdornment } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import FlipCameraIosOutlinedIcon from "@mui/icons-material/FlipCameraIosOutlined";
import axiosInstance from "../axios";
import { Title } from "@mui/icons-material";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const skillsList = [
    { name: 'Design' },
    { name: 'Web dev' },
    { name: 'AI'},
    { name: 'React' },
    { name: 'Java'},
    { name: "C++" },
    { name: 'Figma' },
    {
      name: 'DOCKER'
    },
    { name: 'Azure' },
    { name: 'MachineLearning' },
    {
      name: 'Linux'
    }];

//implement the logic to only request code when user changes email or pass, name is fine without code
const defaultTheme = createTheme();

export default function EditJob() {
  const navigate=useNavigate();
  const { jobId } = useParams();

  const [jobData, setJobData] = useState({
    title: '',
    salary: '',
    summary: '',
    skills: [],
    description: ''
  });
  
  useEffect(() => {
    axiosInstance.get(`jobs/${jobId}/`)
      .then(response => {
        const { title, salary, summary, skills, description } = response.data;
        setJobData({
          title,
          salary,
          summary,
          skills: skills.split(','), // Split the skills string into an array
          description
        });
        
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
        alert('Error fetching job details');
      });
  }, [jobId]);








 
  

  const handleSubmit = () => {
    const { title, salary, summary, skills, description } = jobData;
    if (!title || !salary || !summary || !skills.length || !description) {
      toast.warning("Please fill the whole form");
    } else {
      axiosInstance.patch(`jobs/${jobId}/update/`, {
        title,
        salary,
        summary,
        skills: skills.join(','), // Convert the skills array back to a string
        description
      })
        .then(response => {
          toast.success("Update successful!");
          navigate(-1);
         
          
        })
        .catch(error => {
          console.error("Update failed:", error);
          toast.error('Update failed');
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            maxWidth: "800px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5" sx={{ pt: 1 }}>
                  Edit Job
                </Typography>
                <Box
                  component="form"
                  noValidate
                  //onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="jobTitle"
                        fullWidth
                        id="JobTitle"
                        label="Job Title"
                        autoFocus
                        value={jobData.title}
                       
                        onChange={(ev) => {
                            setJobData({...jobData, title: ev.target.value});
                          
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                      value={jobData.salary}
                      
                      onChange={(ev) => {
                        setJobData({...jobData, salary: ev.target.value});
                        
                      }}
                      placeholder="Salary"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          )
                          
                        }}
                        inputProps={{
                            step: 100
                          }}
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      
                    <TextareaAutosize 
  aria-label="paragraph input"
  minRows={3}
  placeholder="Enter a brief job description to be displayed..."
  style={{  width:'100%' ,resize: 'none',border:'1.9px groove #D3D3D3'  }} // Disable resize
  value={jobData.summary}
                      
                      onChange={(ev) => {
                        setJobData({...jobData, summary: ev.target.value});
                        
                      }}
/>
           
                    </Grid>
                    <Grid item xs={12}>
                    <Autocomplete
                     value={
                        jobData.skills.map(skill => 
                          skillsList.find(s => s.name === skill) || { name: skill }
                        )
                      }
                     onChange={(event, newValue) => {
                       setJobData({ ...jobData, skills: newValue.map(item => item.name) });
                     }}
        multiple
        id="tags-standard"
        options={skillsList}
        getOptionLabel={(option) => option.name}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select skills in demand"
            
          />
        )}
      />
                    </Grid>
                    <Grid item xs={12}>
                    <TextareaAutosize 
                    value={jobData.description}
                    onChange={(ev) => {
                        setJobData({...jobData, description: ev.target.value});
                      
                    }}
      aria-label="paragraph input"
      minRows={11}
      placeholder="Detailed Job description..."
      style={{ width: '100%' ,resize:'none', border:'1.3px groove #D3D3D3'}}
    />
                      
                    </Grid>
                  </Grid>
                  <Stack direction="row" justifyContent="flex-end" gap={2}>
                    <Button variant="outlined" sx={{ mt: 3, mb: 2 }} >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Update job
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Container>
          </Card>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

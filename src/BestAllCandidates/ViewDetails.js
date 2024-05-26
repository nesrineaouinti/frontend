import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import Applicationss from "./Applications";
import { Padding } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Button from "@mui/joy/Button";
import axiosInstance from "../axios";
import {  useParams } from 'react-router-dom';


export default function ViewDetails() {
  const [applications, setApplications]=React.useState([])
  const { jobId } = useParams(); //get jobId from URL sent from when we click view details 



  React.useEffect(() => {
    axiosInstance.get(`/applications/byjob/${jobId}/` ) 
        .then(response => {
          setApplications(response.data);
          
            
           
            
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            alert('Error fetching data: ', error)
            
        });
}, []);

React.useEffect(() => {
  console.log(applications);
}, [applications]);










  return (
    <Box width='100%'  sx={{
      px:{md:5}, py:{md:1}
      
     }} >
    <CssVarsProvider>
      <Box
            sx={{
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "row" },
              alignItems: { xs: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography level="h2" component="h1">
              Orders
            </Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
    <Tabs
      variant="outlined"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        width: "100%",
        borderRadius: "lg",
        boxShadow: "lg",
        overflow: "auto",
        
        
        
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          
          [`& .${tabClasses.root}`]: {
            fontSize: "sm",
            fontWeight: "lg",
            [`&[aria-selected="true"]`]: {
              color: "primary.500",
              bgcolor: "background.surface",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          Best Candidates for this job
        </Tab>
        <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
          All Candidates for this job
        </Tab>
      </TabList>
      <TabPanel value={0} sx={{height:'100%'}}>
      <Button>execute algorithm</Button>
         <Applicationss data={applications}/>
      </TabPanel>
      



      <TabPanel value={1}>
        
      <Applicationss data={applications}/>
      </TabPanel>
    </Tabs>
    </CssVarsProvider>
    </Box>
  );
}

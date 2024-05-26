

import {React,useState,useEffect} from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";

import OpenInNew from "@mui/icons-material/OpenInNew";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import axiosInstance from "../axios";
import Button from '@mui/joy/Button';
import {Box,Chip,Divider,Typography} from '@mui/joy';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Textarea from '@mui/joy/Textarea';

import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import { Stack } from "@mui/material";




function formatDate(dateTimeStr) {
  const date = new Date(dateTimeStr);
  return date.toLocaleDateString(); }

export default function Applicationss({data}) {
 

  const [variant, setVariant] = useState(undefined);
  const [applications, setApplications] = useState(data);
 

  useEffect(() => {
    setApplications(data);
  }, [data]);





const [currentAppId, setCurrentAppId] = useState(null);
const handleStatusChange=(status,appId)=>{
console.log(status,appId)    
axiosInstance.patch(`applications/${appId}/`,{status:status}) 
.then(response => {
  // On success, update the applications state to reflect the change
  const updatedApplications = applications.map(app => {
    if (app.id === appId) {
      return { ...app, status: status };  // Update the status of the relevant application
    }
    return app;
  });
  setApplications(updatedApplications);  // Update the state with the modified applications array
  alert(`Success! updated to: ${status}`)
  setVariant(undefined);  // Close the modal
})
.catch(error=>{
  alert("error updating") }
)



}



  return (
    <CssVarsProvider>
      <CssBaseline />
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", //change this to edit the width of the cards
          gap: 2,
        }}
      >
        {applications.map((app) => (
          <Sheet
            key={app.id}
            component="li"
            variant="outlined"
            sx={{
              borderRadius: "sm",
              p: 2,
              listStyle: "none",
            }}
          >
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar
                  variant="solid"
                  alt={app.candidate.first_name}
                  sx={{ borderRadius: "50%" }}
                />
                <div>
                  <Typography level="title-md">{app.candidate.first_name}{' '}{app.candidate.last_name}</Typography>
                  <Typography level="body-xs">{app.candidate_details}</Typography>
                </div>
              </Box>
              <Typography level="body1" sx={{ alignSelf: "center" }}>
              {formatDate(app.created_at)}
              </Typography>
            </Box>
            <Divider component="div" sx={{ my: 2 }} />

            <AccordionGroup
              variant="outlined"
              transition="0.2s"
              sx={{
                maxWidth: 400,
                borderRadius: "lg",
                [`& .${accordionSummaryClasses.button}:hover`]: {
                  bgcolor: "transparent",
                },
                [`& .${accordionDetailsClasses.content}`]: {
                  boxShadow: (theme) =>
                    `inset 0 1px ${theme.vars.palette.divider}`,
                  [`&.${accordionDetailsClasses.expanded}`]: {
                    paddingBlock: "0.75rem",
                  },
                },
              }}
            >
              <Accordion>
                <AccordionSummary>Click to read cover letter</AccordionSummary>
                <AccordionDetails variant="soft">
                  {app.cover_letter}
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>

            <Divider component="div" sx={{ my: 1 }} />
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography level="title-sm">Status:</Typography>
                <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                  
                    <Chip
                      
                      
                      color={
                        app.status === 'accepted' ? 'success' :
                        app.status === 'rejected' ? 'danger' :
                        app.status === 'in review' ? 'warning' : 'primary'
                    }
                      size="sm"
                    >
                      {app.status}
                    </Chip>
                  
                </Box>
              </Box>





             {/*  <Button
                component="a"
                href="#as-link"
                variant="soft"
                startDecorator={<OpenInNew />}
                sx={{ flexGrow: 0, width: 100 }}
              >
                CV
                  </Button>  */}






              
        <Button 
          variant="soft"
          
          startDecorator={<OpenInNew />}
          sx={{ flexGrow: 0, width: 100 }}
          onClick={() => {
            setVariant('soft');
            setCurrentAppId(app.id);  // Store the current application ID when opening the modal
          }}
        >
          CV
        </Button>
        
     
      <Modal open={!!variant} onClose={() => setVariant(undefined)} sx={{pl:{xs:0,md:160,lg:210}}}  >
        <ModalDialog variant={variant} sx={{width:'600px'}}>
          <ModalClose />
          <DialogTitle>Job Application</DialogTitle>
          <DialogContent >
         
            
        
      <Textarea color='primary' sx={{height:450}}name="Soft" placeholder="IMG CV" variant="palin" />
 
  
  
  <Divider />
  <Stack direction='row' justifyContent='space-between'>
 
  <Button  sx={{px:{xs:5,sm:10}}} size='lg' color="danger" 
  onClick={() => handleStatusChange('rejected',currentAppId)}>Reject</Button> 
   <Button sx={{px:{xs:5,sm:10}}} size='lg' color="success" 
  onClick={() => handleStatusChange('accepted',currentAppId)}>Accept</Button>
  </Stack>
            
          
          
          </DialogContent>
        </ModalDialog>
      </Modal>
    
            </Box>
          </Sheet>
        ))}
      </List>
    </CssVarsProvider>
  );
}

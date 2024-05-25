import * as React from 'react';
import Button from '@mui/joy/Button';
import {Card,Box,Container,Stack,Chip,Divider,CardActions,Typography} from '@mui/joy';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { CssVarsProvider } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
import FileUpload from './FileUpload';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';





export default function ModalButton({job}) {
  const navigate=useNavigate();
  
  const [variant, setVariant] = React.useState(undefined);
 const  [cv,setCv]=React.useState('')
 const  [cover_letter,setCover_letter]=React.useState('')
 


const handleSubmit=()=>{



  axiosInstance
  .post(`applications/create/${job}/`, {
    
    cover_letter: cover_letter,
    
  })
  .then((res) => {  

    console.log(res);
    console.log(res.data);
    alert("Application submitted successfully!")
    navigate(-1)
  })
  .catch((error) => { 
    console.error("Creation failed:", error);
   alert('Error, you have probably already applied for this job')
    
  });}









  return (
    <CssVarsProvider>
    <React.Fragment>
        <Button 
          variant="outlined"
          size='lg'
          onClick={() => {
            setVariant('soft');
          }}
        >
          APPLY NOW
        </Button>
        
     
      <Modal open={!!variant} onClose={() => setVariant(undefined)}>
        <ModalDialog variant={variant} sx={{width:'600px'}}>
          <ModalClose />
          <DialogTitle>Job Application</DialogTitle>
          <DialogContent >
          <Divider/>
            
    <Typography sx={{fontSize:20}}>Cover letter:</Typography>     
      <Textarea color='primary' sx={{height:450}}name="Soft" placeholder="Write your cover letter here…" variant="palin" 
       onChange={(ev) => {
        setCover_letter(ev.target.value)}} value={cover_letter}/>
 
      
         
      <Typography sx={{fontSize:20}}>CV:</Typography> 
      <FileUpload/>
            
               
  
  <Divider />
  <Button onClick={handleSubmit} >Confirm and send my application</Button>   
            
          
          
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
    </CssVarsProvider>
  );
}
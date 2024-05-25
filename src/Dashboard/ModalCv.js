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






export default function ModalCv() {
  const [variant, setVariant] = React.useState(undefined);
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
        <ModalDialog variant={variant}>
          <ModalClose />
          <DialogTitle>Job Application</DialogTitle>
          <DialogContent >
            
            
        
      <Textarea sx={{height:450,width:600}}name="Soft" placeholder="Write your cover letter here…" variant="soft" />
 
      
         
      <Typography sx={{fontSize:20}}>CV:</Typography> 
            
               
  
  <Divider/>
  <Stack direction='row' justifyContent='space-BETWEEN'>
  <Button>Hello</Button>
  <Button >Confirm and send my application</Button>   </Stack>
            
          
          
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
    </CssVarsProvider>
  );
}
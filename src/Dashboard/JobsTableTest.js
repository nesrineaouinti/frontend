import {React,useState,useEffect} from 'react';
import { Avatar, Box, Button, Chip, IconButton, Link, Modal, ModalClose, ModalDialog, Sheet, Table, Typography, Dropdown, Menu, MenuButton, MenuItem, Divider, CssVarsProvider } from '@mui/joy';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EditIcon from '@mui/icons-material/Edit';
import axiosInstance from '../axios';
import Switch from '@mui/joy/Switch';
import { useNavigate } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";


function formatDate(dateTimeStr) {
    const date = new Date(dateTimeStr);
    return date.toLocaleDateString(); // This will format the date based on the locale
  }

  

  function RowMenu({ jobId, onDelete, onPromote }) {
    useEffect(() => {  //this is to fetch the promoted jobs and set their toggle to Promoted on 
      axiosInstance.get(`jobs/${jobId}/`)  
          .then(response => {
              
              setChecked(response.data.promoted);
              
              
              console.log(response.data.promoted)
          })
          .catch(error => {
              console.error('Error fetching data: ', error);
              alert("error fetching the job")
              
          });
  }, []);


    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleTogglePromote = (event) => {
        const newPromoteStatus = event.target.checked;
        setChecked(newPromoteStatus);
        onPromote(jobId, newPromoteStatus);  // Passing the new promote status to the API call function
    };

  

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <MenuItem color='success' >
                    <ListItemDecorator>
                        <WhatshotIcon />
                    </ListItemDecorator>
                    Promote 
                    <Switch
                        checked={checked}
                        onChange={handleTogglePromote}
                        color={checked ? 'success' : 'neutral'}
                        variant='outlined'
                    />
                </MenuItem>   
                <MenuItem onClick={()=>{ navigate(`/dashboard/editjob/${jobId}`)}}>   
                    <ListItemDecorator>
                        <EditIcon />
                    </ListItemDecorator>
                    Edit
                </MenuItem>
                <Divider />


                <MenuItem color='danger' onClick={() => onDelete(jobId)}>
                    <ListItemDecorator>
                        <DeleteIcon />
                    </ListItemDecorator>
                    Delete
                </MenuItem>
            </Menu>
        </Dropdown>
    );
}





export default function JobsTableTest({onEditJob,onViewDetails}) {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(13); //how many rows in a single page 

  const handleChangePage = (event, newPage) => {setPage(newPage);};
  
    
  const handleNextPage = () => {if (page < Math.ceil(jobs.length / rowsPerPage) - 1) {
    setPage(page + 1);}};
  const handlePreviousPage = () => {if (page > 0) {setPage(page - 1);}};
    
      
    
  



  const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('jobs/')  
            .then(response => {
                setJobs(response.data);
                
                setLoading(false);
                console.log(jobs)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                alert("error my nigga")
                setLoading(false);
            });
    }, []);



    const handleDelete = (jobId) => {
      
      axiosInstance.delete(`jobs/${jobId}/delete/`)
        .then(response => {
          setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId)); //update the disaplyed jobs without reloading the server
          alert('Job deleted successfully');
        })
        .catch(error => {
          alert("Error deleting job");
        });
    };
 




    const handlePromote = (jobId,promoteStatus) => {
      console.log(jobId)
      axiosInstance.patch(`jobs/${jobId}/update/`, { promoted: promoteStatus })
        .then(response => {
          // Update local state to reflect the promotion
          setJobs(prevJobs => prevJobs.map(job => job.id === jobId ? { ...job, promote: true } : job));
          alert(`Success! Promoted: ${promoteStatus}`);
        })
        .catch(error => {
          alert("Error promoting job");
        });
    };
  











  return (
    
    <CssVarsProvider>
    <CssBaseline/>
      
    <Box   sx={{ 
      px:{xs:1,md:5}, pt:{xs:7.5,md:10}, pb:{xs:1,md:5}  }} >
      <Sheet 
        variant="outlined"
        sx={{
          width: '100%',
          borderRadius: 'sm',
          overflow: 'auto',
          boxShadow: 'lg'
        }}
      >
        <Table aria-labelledby="tableTitle" stickyHeader  sx={{ maxWidth:{xs:'100%'} ,
          '--TableCell-headBackground': '#DDE7EE',   //'#CAF4FF' good blue
        }}>
          <thead>
            <tr>
              <th>Job title</th>
              <th>Created</th>
              <th >Applications Nº</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((jobs) => (
              <tr key={jobs.id}>
                <td><Typography level="body1">{jobs.title}</Typography></td>
                <td><Typography level="body1">{formatDate(jobs.created_at)}</Typography></td>
                <td><Typography level="body1">{jobs.total_applications}</Typography></td>
                <td>
                  <Box sx={{ display: {sm:'flex'}, gap: { xs: -1, sm: 2 }, alignItems: 'center' }}>
                    <Button variant="outlined" sx={{ color: '#2f2f2f' }} size="small" onClick={()=>{ navigate(`/dashboard/viewdetails/${jobs.id}`)}}>View Details</Button> 
                    <RowMenu jobId={jobs.id} onDelete={handleDelete} onPromote={handlePromote}  />  {/*bech nab3eth kol jobid lil button mte3eha  w w button ki yenzel 3leha wa7ed traja3li onDelete(jobId) t9oli bara handli delete  */}
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <IconButton onClick={handlePreviousPage} disabled={page === 0}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={handleNextPage} disabled={page >= Math.ceil(jobs.length / rowsPerPage) - 1}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Sheet>
    </Box>
    </CssVarsProvider>
  );
}
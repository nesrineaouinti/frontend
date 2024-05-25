import * as React from 'react';
import { Avatar, Box, Button, Chip, IconButton, Link, Modal, ModalClose, ModalDialog, Sheet, Table, Typography, Dropdown, Menu, MenuButton, MenuItem, Divider } from '@mui/joy';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EditIcon from '@mui/icons-material/Edit';
// Example data for the table
const rows = [
  {
    id: 'JOB-001',
    jobName: 'Software Developer',
    date: 'May 10, 2024',
    applications: 120,
  },
  {
    id: 'JOB-002',
    jobName: 'Product Manager',
    date: 'May 9, 2024',
    applications: 98,
  },
  {
    id: 'JOB-003',
    jobName: 'Graphic Designer',
    date: 'May 8, 2024',
    applications: 76,
  },
  {
    id: 'JOB-001d',
    jobName: 'Software Developer',
    date: 'May 10, 2024',
    applications: 120,
  },
  {
    id: 'JOB-002d',
    jobName: 'Product Manager',
    date: 'May 9, 2024',
    applications: 98,
  },
  {
    id: 'JOB-003d',
    jobName: 'Graphic Designer',
    date: 'May 8, 2024',
    applications: 76,
  },
  
  // Add more rows as needed
];

function RowMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
      >
        <MoreHorizRoundedIcon />
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem color='success'><ListItemDecorator>
            <WhatshotIcon />
          </ListItemDecorator>Promote</MenuItem>
        <MenuItem><ListItemDecorator>
            <EditIcon  />
          </ListItemDecorator>Edit</MenuItem>
        <Divider/>
        <MenuItem color='danger' ><ListItemDecorator>
            <DeleteIcon />
          </ListItemDecorator>Delete</MenuItem>
      </Menu>
    </Dropdown>
  );
}

export default function JobsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5); //how many rows in a single page 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleNextPage = () => {
    if (page < Math.ceil(rows.length / rowsPerPage) - 1) {
      setPage(page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };



















  
  return (
    <Box padding={1}>
      <Sheet
        variant="outlined"
        sx={{
          width: '100%',
          borderRadius: 'sm',
          overflow: 'auto',
        }}
      >
        <Table aria-labelledby="tableTitle" stickyHeader sx={{ maxWidth:{xs:'100%'} ,
          '--TableCell-headBackground': '#DDE7EE',   //'#CAF4FF' good blue
        }}>
          <thead>
            <tr>
              <th>Job Name</th>
              <th>Date</th>
              <th >Applications Nº</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <tr key={row.id}>
                <td><Typography level="body1">{row.jobName}</Typography></td>
                <td><Typography level="body1">{row.date}</Typography></td>
                <td><Typography level="body1">{row.applications}</Typography></td>
                <td>
                  <Box sx={{ display: {sm:'flex'}, gap: { xs: -1, sm: 2 }, alignItems: 'center' }}>
                    <Button variant="outlined" sx={{ color: '#2f2f2f' }} size="small">View Details</Button>
                    <RowMenu  />
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
          <IconButton onClick={handleNextPage} disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Sheet>
    </Box>
  );
}
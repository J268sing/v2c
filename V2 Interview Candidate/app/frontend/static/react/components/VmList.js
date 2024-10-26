import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Container
} from '@mui/material';

const VmList = () => {
  const [vms, setVms] = useState([]);

  useEffect(() => {
    axios.get('/api/vms/')
      .then(response => {
        console.log("Data fetched:", response.data);
        setVms(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the VM data!', error);
      });
  }, []);

  const handleRowClick = (vm) => {
    alert(`Clicked on VM: ${vm.name} with ID: ${vm.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ color: '#1e88e5' }} // Blue color for the title
      >
        VM List
      </Typography>
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '8px' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d2' }}> {/* Blue color for header background */}
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>CPU's</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>RAM</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vms.map((vm) => (
              <TableRow 
                key={vm.id} 
                hover 
                onClick={() => handleRowClick(vm)} 
                sx={{ 
                  cursor: 'pointer', 
                  backgroundColor: vm.id % 2 === 0 ? '#e3f2fd' : '#ffffff', // Alternating row colors
                  '&:hover': {
                    backgroundColor: '#bbdefb' // Hover color for rows
                  }
                }}
              >
                <TableCell>{vm.id}</TableCell>
                <TableCell>{vm.name}</TableCell>
                <TableCell>{vm.cpus}</TableCell>
                <TableCell>{vm.ram}</TableCell>
                <TableCell>{vm.active ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default VmList;

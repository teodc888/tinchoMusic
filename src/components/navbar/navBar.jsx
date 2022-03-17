import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"red"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ textAlign:"center"}}>
            TINCHO RISAS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
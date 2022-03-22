import React from 'react'
import {Box,AppBar,Button,Toolbar,Typography} from '@mui/material'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              REACT JWT App
            </Typography>
            <Button
              component={NavLink}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              to="/"
              sx={{ color: "white" ,textTransform:'none' }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              to="/contact"
              sx={{ color: "white" ,textTransform:'none'}}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              to="/login"
              sx={{ color: "white" ,textTransform:'none'}}
            >
              Login/Registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
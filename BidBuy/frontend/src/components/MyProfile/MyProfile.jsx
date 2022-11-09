import React, { useState, Fragment, } from 'react';
import {
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Button,
  Stack,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MyProfile.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // backgroundColor: 'pink',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  paddingLeft: '30px',
  boxShadow: 'none'
  //color: theme.palette.text.secondary,
}));

function Header() {
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAddress = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const handlePassword = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  return (
    <>
      <div style={{ height: '20px' }}></div>
      <NavBar />
      <Grid  display='flex'  container direction='column' sx={{ p: 5 }} xs={12}>

        <Grid display='flex' sx={{ flexDirection: 'column', p: 1, marginLeft: 7 }} xs={8}>
          <Box container display='flex'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, },


              flexDirection: 'column',

            }}
            noValidate
            autoComplete="off"
          >
            <Stack direction="row">


              <Box
              sx={{ height: '100px', width: '100px', backgroundColor: '#e0e0e0', borderRadius: '10vw' }}
              >
              </Box>

              <Stack direction="column">
              <Box sx={{ height: '15px' }}></Box>
              
                <Stack direction="row" spacing={1}>
                  <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold', marginLeft: 1.2, color: '#CF3D2F' }}>My</Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold' }}>Profile</Typography>


                </Stack>
                
              <Box sx={{ height: '10px' }}></Box>
                <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold', marginLeft: 1.2 }}>Muhammad Ahmed</Typography>
                {/* <Box sx={{ height: '10px' }}></Box> */}
              </Stack>
            </Stack>

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
              }} noValidate autoComplete="off"
            >
              <div>
                <TextField required id="outlined-required" label="First Name" />
                <TextField required id="outlined-required" label="Last Name" />
              </div>
              <div>
                <TextField required id="outlined-required" label="Email Address" />
                <TextField required id="outlined-required" label="Password" />
              </div>
              <div>
                <TextField required id="outlined-required" label="Phone Number" />
                <TextField required id="outlined-required" label="Address" />
              </div>
              <div>
                <TextField required id="outlined-required" label="City" />
                <TextField required id="outlined-required" label="Country" />

              </div>



            </Box>


          </Box>
        </Grid>


      </Grid>

    </>



  )
}

export default Header
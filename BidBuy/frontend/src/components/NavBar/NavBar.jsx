import React, { useState } from 'react';
import { Button, 
         TextField,
         IconButton,
         InputAdornment,
        } from '@mui/material';
import './NavBar.css';
import Logo from '../Logo/Logo.jsx';


import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';

// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

import Stack from '@mui/material/Stack';

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

    <div className='div_Navmain'>


      <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"} >
        <Logo/>
        <Button startIcon={<MenuIcon style={{ color: 'white' }}/>} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize:'10px', padding: '6px 10px 5px 13px' }}>
          Categories
        </Button>
        {/* <button className='btn_cat'>Categories</button> */}
        <TextField
          label=""
          InputProps={{
            sx: { height: "35px", width:"350px", fontSize: '12px', margin: 0, textAlign: 'start', p:0},
            placeholder: "Search",
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button startIcon={<FeaturedPlayListRoundedIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Orders
        </Button>
        <Button startIcon={<FavoriteIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Favourites
        </Button>
        <Button startIcon={<ShoppingCartIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Cart
        </Button>
        <Button style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize:'10px', padding: '6px 10px 5px 13px' }}>
          Sign Out
        </Button>
        {/* <button className='btn_cat'>Sign Out</button> */}

      </Stack>

      <div style={{ padding: '5px' }}></div>


      <Stack direction="row" spacing={12} justifyContent='space-evenly' alignItems={'center'} >

        <Button startIcon={<LocationOnIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize: '12px', }}>
          Karachi
        </Button>
        <Button style={{ color: 'black', fontSize: '12px', }}>
          Home
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Profile
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Auctions
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Bids
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          Contact Us
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', paddingRight: '10px' }} size="small">
          Sell Now
        </Button>

      </Stack>

    </div>

  )
}

export default Header
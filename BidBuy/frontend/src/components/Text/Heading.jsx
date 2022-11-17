import React from 'react'
import Stack from '@mui/material/Stack';
// import './Heading.css';

export default function Heading(props) {
  return (
    <div style={{paddingLeft: '150px', paddingTop: '15px', paddingBottom: '10px' ,fontSize: "12px", margin: "0px"}}>
      <Stack direction={'row'}>
        <h1 style={{color: '#CF3D2F' }}>{props.first}</h1>
        <h1 style={{marginLeft: "8px"}}>{props.second}</h1>
      </Stack>
    </div>

  )
}

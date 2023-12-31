import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  IconButton,
  Stack,
  styled,
  ImageList,
  ImageListItem,
  itemData

} from '@mui/material';
import CardProduct from './CardProduct';
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
import { useState, useEffect } from 'react'
import { api } from '../../App';

// import { Stack } from '@mui/system';

function CardGrid(props) {
  const [products, setproducts] = useState([])
  const getProducts = () => {
    api.get('/getallproducts').then(res => {
      console.log(res.data.data);
      setproducts(res.data.data);
      // console.log(products);

    })
  }

  useEffect(() => {
    getProducts();
  }, [])

  
  return (
    <>
      <Stack direction="column" spacing={1} alignItems={"center"}>

        <Stack direction="row" spacing={1} alignItems={"center"}>
        <ImageList sx={{padding: '50px'}} cols={4} rowHeight={164}>
        {products.map((product) => (

          <CardProduct product={product} />

        ))}
      </ImageList>

        </Stack>
        <Stack direction="row" spacing={1} alignItems={"center"}>
   
   
        </Stack>
        <Stack direction="row" spacing={1} alignItems={"center"}>
     
       
        </Stack>
      </Stack>

      

    </>
  )
}

export default CardGrid
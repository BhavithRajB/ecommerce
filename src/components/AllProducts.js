import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Category from "./Category";
import { DatasetRounded } from "@mui/icons-material";
import Alert from '@mui/material/Alert';

function AllProducts() {

const[productData,setProductdata]=useState([]);
const[search,setSearch]=useState(null);

useEffect(()=>{
  axios.get(`https://dummyjson.com/products`).then((res)=>{
    setProductdata(res.data.products)
   
})
.catch((err)=>(
    console.log=(err)
))
},[])

let filtered=search?productData.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())):productData

  console.log(search)
  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField label={"Search products here"} 
        onChange={(data)=>setSearch(data.target.value)}
        />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
        
      >
      {
        filtered.length>0?
      
      filtered?.map((item)=>(
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="200"
            image={item.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
            {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="h5">{item.price}</Typography>

            <Typography
              variant="h5"
              style={{ textAlign: "end", width: "100%" }}
            >
              {item.brand}
            </Typography>
          </CardActions>
        </Card>
        )):<Alert severity="warning">ITEM NOT FOUND.</Alert>      
      }
      </Grid>
    </div>
  );
}

export default AllProducts;

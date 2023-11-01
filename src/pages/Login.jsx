import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageFiles from '../indeximg.jsx';

export default function Login() {
  return (
    <Card sx={{ maxWidth: 300 }} style={estilos.total}>
      <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        ></Box>
      <CardActionArea>
        <CardMedia
           component="img"
           height="150"
           image={ImageFiles.image1} // Use the imported image variable here
           alt=""
        /> 
        <br></br>
        <CardContent>
        <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Ingrese email"
            />
            
            <TextField
              required 
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            
          </div>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary">
        
          Login
      
        </Button>
      </CardActions>
    </Card>
    

      );
      
}




const estilos = {
    total: {
      margin: "10px",
      color: "black",
      backgroundColor: "#66F118",
      height:"600px",
      width:"500px"
    },
}   

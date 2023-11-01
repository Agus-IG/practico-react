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
           height="300"
           image={ImageFiles.image1} // Use the imported image variable here
           alt=""
        /> 
        <br></br>
        <CardContent>
        <div>
            <TextField
              required
              id="outlined-required"
              label="Email (Requerido)"
              placeholder="Ingrese Email"
            />
           <br>
           </br>
           <br>
           </br>
            <TextField
              required 
              id="outlined-password-input"
              label="Contraseña (Requerida)"

              autoComplete="current-password"
              placeholder='Ingrese Contraseña'
            />
            
          </div>
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" size="large" color="secondary">
        
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
      backgroundColor: "#888BE3",
      height:"600px",
      width:"500px"
    },
}   

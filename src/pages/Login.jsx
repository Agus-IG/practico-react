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
      <div style = {estilos.todo}>
    <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
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
           sx={{ maxHeight: 200, maxWidth: 200, margin: '0 auto' }}
           image={ImageFiles.image1} // Use the imported image variable here
           alt=""
        /> 
        <br></br>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={estilos.titulos}>
          Iniciar Sesion
        </Typography>
        
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
              label="Contraseña(Requerida)"
              type='password'
              autoComplete="current-password"
              placeholder='Ingrese Contraseña'
            />
            
         

         
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'left' }}>
        <Button variant="contained" size="large"style={estilos.boton}>
        
          Login
      
        </Button>
      </CardActions>
    </Card>
    </div>
    

      );
      
}




const estilos = {
  todo: {
    backgroundColor:"#b3c67f",
    width:"100%",
    height: "100%",
    padding: "1px"
  },
    total: {
      margin: "10px",
      color: "black",
      backgroundColor: "#f8f8d6",
      height:"600px",
      width:"500px"
    },
    titulos:{
      color:"#5d7e62",
      fontSize:"40px",
      fontWight:"10px"
    },
    boton:{
      backgroundColor: "#d4e2b6",
      color:"#5d7e62",
      margin: "2%"

    },
    boton2:{
      outlineColor: "#d4e2b6",
      color:"#5d7e62",
    },
    cont:{
      width: "100%",
      alignItems: "center",
    }
}   

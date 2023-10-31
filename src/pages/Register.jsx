import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Register() {  
  return (
    <div style={estilos.todo}>
      <div style={estilos.card}>
    <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
      <CardMedia
        sx={{ height: 60 }} 
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" style={estilos.titulos}>
          Crea tu cuenta
        </Typography>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre" variant="filled" />
      <br/>
      <TextField id="filled-basic" label="E-mail" variant="filled" />
      <br/>
      <TextField id="standard-basic" label="Contraseña" variant="filled" />
      <br/>
      <TextField id="standard-basic" label="Confirmar Contraseña" variant="filled" />
      
    </Box>
      </CardContent>
      <CardActions>
        <div style = {estilos.cont}>
        <Button variant="secondary" style={estilos.boton2}>cancelar</Button>
        <Button variant="contained" style={estilos.boton} >crear</Button>
        </div>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}

const estilos = {
  todo:{
    backgroundColor:"#b3c67f",
    width:"100%",
    height: "100%",
    padding: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    
  },
  card:{
    display: "flex",
    textAlign: "center"
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

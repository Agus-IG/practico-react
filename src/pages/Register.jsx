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
    <Card sx={{ maxWidth: 1000 }} style={estilos.total}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Crea tu cuenta
        </Typography>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <TextField id="filled-basic" label="E-mail" variant="filled" />
      <TextField id="standard-basic" label="Contraseña" variant="standard" />
      
    </Box>
      </CardContent>
      <CardActions>
        <div style = {estilos.cont}>
        <Button variant="outlined" color="error" style = {estilos.boton}>
  Cancelar
</Button>
        <Button variant="contained" color="success" style = {estilos.boton}>
  Crear
</Button>
        </div>
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
    boton: {
      margin: "5px"
    },
    cont: {
      margin: "10%",
      alignItems: "center",
      display: "flex",
      marginLeft: "27%",
      marginTop: "20%"
      


    }
}   

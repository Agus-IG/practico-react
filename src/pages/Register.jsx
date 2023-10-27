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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent style={estilos.total}>
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
        <Button size="small">Cancelar</Button>
        <Button size="small">Crear</Button>
      </CardActions>

    </Card>
  );
}

const estilos = {
    total: {
      margin: "10px",
      padding: "15px",
      fontFamily: "-apple-system",
      fontSize: "17px",
  
      color: "black",
      backgroundColor: "#888BE3",
      height: "600px",
    },
}   

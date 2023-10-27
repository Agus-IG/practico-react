import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Login() {
  return (
    <Card sx={{ maxWidth: 300 }} style={estilos.total}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green mar & iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary">
          Share
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

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageFiles from '../indeximg.jsx';
import { estilos } from '../Styles.jsx';


function PostCard() {
    return (
    <Card style={estilos.home}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            L
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="NombrePersona"
        subheader="November 2nd, 2023"
        />
        <CardMedia
        component="img"
        sx={{ maxHeight: 200, maxWidth: 150, margin: '0 auto' }}
        image= {ImageFiles.postMariano}
        alt="Home"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 2 de carne, 4 de choclo, 1 de carne, 2 de choclo, 9 de carne, 5 de choclo, 5 de choclo... y otra más de choclo
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;



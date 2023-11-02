import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageFiles from '../indeximg.jsx';

function PostCard() {
    return (
    <Card sx={{ maxWidth: 1000, maxHeight: 1000, }}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="Home"
        subheader="November 2nd, 2023"
        />
        <CardMedia
        component="img"
        sx={{ maxHeight: 100, maxWidth: 100, margin: '0 auto' }}
        image= {ImageFiles.image2}
        alt="Home"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 2 de carne, 4 de choclo, 1 de carne, 2 de choclo, 9 de carne, 5 de choclo, 5 de choclo... y otra más de choclo
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;



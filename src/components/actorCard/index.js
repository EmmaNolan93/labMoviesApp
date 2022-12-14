import React, { useContext  }  from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
export default function MovieCard(actor) {
  const { peoplefav } = useContext(MoviesContext);
  const cast = actor.actors
  if (peoplefav.find((id) => id === cast.id)) {
    cast.favourite = true;
  } else {
    cast.favourite = false
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
       avatar={  
        cast.favourite ? (
          <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon/>
          </Avatar>
        ) : null
       }
        title={
          <Typography variant="h5" component="p">
            {cast.name}{": "}{cast.known_for_department}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="p">
              {cast.character}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {cast.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {actor.action(cast)}
      <Link to={`/people/${cast.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
      </Link>
  </CardActions>
    </Card>
  );
}
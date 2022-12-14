import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import Avatars from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import  PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import AddToFavouritesIcon from "../cardIcons/addToFavourites";
import addPlaylist from "../cardIcons/playlistAdd";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
export default function MovieCard({ movie, action }) {
  //const movie = props.movie;
  const { favourites} = useContext(MoviesContext);
  const { playlists } = useContext(MoviesContext);
  console.log(action)
  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }
  if (playlists.find((id) => id === movie.id)) {
    movie.playlist = true;
  } else {
    movie.playlist = false
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
        avatar={
          action(movie).type === AddToFavouritesIcon ? (  
          movie.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon/>
            </Avatar>
          ) : null): null ||action(movie).type === addPlaylist ? ( movie.playlist ? (
            <Avatars sx={{ backgroundColor: 'red' }}>
              <PlaylistIcon />
            </Avatars>
          ) : null): null
        } 
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              <LocalActivityIcon fontSize="small" />
              <Link to={`/credits/${movie.id}`}>
              {" See Crew & Cast "} 
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(movie)}
    <Link to={`/movies/${movie.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}
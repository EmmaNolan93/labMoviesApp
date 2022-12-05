import React, { useContext  }from "react";
import Card from "@mui/material/Card";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
export default function TvCard({ tv, action }) {
    const { tvShow } = useContext(MoviesContext);
    console.log(action)
    if (tvShow.find((id) => id === tv.id)) {
      tv.favourite = true;
    } else {
      tv.favourite = false
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
       avatar={
        tv.favourite ? (
          <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon/>
          </Avatar>
        ) : null
       }
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" component="p">
                {"Number of episodes: "}
              {tv.episode_count}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tv.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(tv)}
    <Link to={`/tv/${tv.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}
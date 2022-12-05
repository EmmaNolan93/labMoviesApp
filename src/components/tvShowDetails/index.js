import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StarRate from "@mui/icons-material/StarRate";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => { 
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip  label={`Number of episodes: ${movie.episode_run_time} eps`} />
        <Chip label={`Released: ${movie.first_air_date}`} />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Created by" sx={chip} color="primary" />
        </li>
        {movie.created_by.map((c) => (
          <li key = {c.name}>
            <Chip label={c.name} sx={chip}/>
          </li>
        ))}
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Companies" sx={chip} color="primary" />
        </li>
        {movie.production_companies.map((c) => (
          <li key = {c.name}>
            <Chip label = {c.origin_country} sx={chip}/>
            <Chip label={c.name} sx={chip}/>
          </li>
        ))}
      </Paper>
    </>
  );
};
export default MovieDetails ;
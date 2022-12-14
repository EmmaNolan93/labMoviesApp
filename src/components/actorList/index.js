import React from "react";
import Movie from "../actorCard";
import Grid from "@mui/material/Grid";
const ActorList = (actors) => {
  const action = actors.action
    let movieCards = actors.movies.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Movie key={m.id} actors={m} action={action} />
        </Grid>
      ));
      return movieCards;

};

export default ActorList;
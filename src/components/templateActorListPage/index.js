import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterCastCrewCard";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title}) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreFilter !== "" ? m.known_for_department.includes(genreFilter) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ActorList movies={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
import { array } from "prop-types";
import React, {  useEffect, useState} from "react";
import { getMovieCastCrew } from "../../api/tmdb-api";
import ActorListPageTemplate from "../templateActorListPage";

const MovieCasts = ({ movie }) => { 
  //const [actors, setActors] = useState([]);
  console.log(movie)
  /*useEffect(() => {
    getMovieCastCrew(movie.id).then((actors) => {
      setActors(actors);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(actors["cast"])*/
   // Redundant, but necessary to avoid app crashing.

   return (
     <ActorListPageTemplate
       title='Cast of Movie'
       actors={movie.cast}
     />
   );
};
export default MovieCasts ;
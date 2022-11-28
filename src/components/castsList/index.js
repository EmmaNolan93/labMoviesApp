import ActorListPageTemplate from "../templateActorListPage";
const MovieCasts = ({ movie }) => { 
  let combinedCastCrew = [].concat(movie.cast, movie.crew);
  console.log(combinedCastCrew);
   return (
     <ActorListPageTemplate
       title='Cast of Movie'
       actors={combinedCastCrew}
     />
   );
};
export default MovieCasts;
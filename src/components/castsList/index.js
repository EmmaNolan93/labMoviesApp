import ActorListPageTemplate from "../templateActorListPage";
const MovieCasts = ({ movie }) => { 
  let combinedCastCrew = [].concat(movie.cast, movie.crew);
  function removeDuplicateObjectFromArray(array, key) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => (
            el[key] === obj[key]
        ))
    )
}
let ans = removeDuplicateObjectFromArray(combinedCastCrew, 'id')
console.log(ans)
   return (
     <ActorListPageTemplate
       title='Cast of Movie'
       actors={ans}
     />
   );
};
export default MovieCasts;
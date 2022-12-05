import React  from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { getCreditMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import PageTemplate from '../components/templateMovieListPage';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

export default function SimilarMovie(props) {
  const { id } = useParams();
  const { data: Movies, error, isLoading, isError } = useQuery(
    ["creditMovies", { id: id }],
    getCreditMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  let combinedCastCrew = [].concat(Movies.cast, Movies.crew);
  function removeDuplicateObjectFromArray(array, key) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => (
            el[key] === obj[key]
        ))
    )
}
let ans = removeDuplicateObjectFromArray(combinedCastCrew, 'id')
 return (
    <PageTemplate
      title=' Movies'
      movies={ans}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  )
}
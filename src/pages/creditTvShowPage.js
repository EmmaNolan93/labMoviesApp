import React  from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import { getCreditTv } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import PageTemplate from '../components/templateTvShowsPage';
import AddToFavouritesIcon from '../components/cardIcons/addTvShowToFav'

export default function SimilarMovie(props) {
  const { id } = useParams();
  const { data: Movies, error, isLoading, isError } = useQuery(
    ["creditTv", { id: id }],
    getCreditTv
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
      title='Stared in TV shows'
      tv={ans}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  )
}
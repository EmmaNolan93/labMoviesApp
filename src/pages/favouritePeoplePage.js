import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removePoeple";

const FavouriteMoviesPage = () => {
  const {peoplefav: ids } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    ids.map((movieId) => {
      return {
        queryKey: ["poeple", { id: movieId }],
        queryFn: getPeople,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    return q.data
  });
  console.log(movies)
  return (
    <PageTemplate
    title="Favourite Movies"
    actors={movies}
    action={(movie) => {
      return (
        <>
          <RemoveFromFavourites movie={movie}/>
        </>
      );
    }}
  />
  );
};

export default FavouriteMoviesPage;
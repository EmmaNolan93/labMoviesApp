import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowsPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromTvShow";

const FavouriteTvShowPage = () => {
  const { tvShow: tvIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["TvShow", { id: tvId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
    title="Favourite Tv Show"
    tv={tvShows}
    action={(movie) => {
      return (
        <>
          <RemoveFromFavourites movie={movie} />
        </>
      );
    }}
  />
  );
};

export default FavouriteTvShowPage;
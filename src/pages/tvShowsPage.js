import React from "react";
import { getTvShows } from "../api/tmdb-api";
import PageTemplate from "../components/templateTvShowsPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addTvShowToFav'

const UpcomingPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('tvShow', getTvShows)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
 
  // Redundant, but necessary to avoid app crashing.
  const favorites = tvShows.filter(m => m.favorites)
  localStorage.setItem('favourites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title='Discover Tv Show'
      tv={tvShows}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;
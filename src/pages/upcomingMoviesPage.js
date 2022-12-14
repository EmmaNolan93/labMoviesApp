import React from "react";
import { getupcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/playlistAdd'

const UpcomingPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('movie', getupcomingMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(movies)

  // Redundant, but necessary to avoid app crashing.
  const playlists = movies.filter(m => m.playlist)
  localStorage.setItem('playlists', JSON.stringify(playlists))

  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;
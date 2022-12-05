import React from "react";
import { getPopPerson } from "../api/tmdb-api";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addtToFavAct'

const UpcomingPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('Popular', getPopPerson)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;
 
  // Redundant, but necessary to avoid app crashing.
  const favorites = people.filter(m => m.favorites)
  localStorage.setItem('favourites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title='Discover Actors'
      actors={people}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingPage;
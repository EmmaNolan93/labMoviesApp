import React from "react";
import { useParams } from 'react-router-dom';
import CreditDetails from "../components/castCrewDetails/";
import PageTemplate from "../components/templateActorPage";
import { getPeople } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["peoples", { id: id }],
    getPeople
  );
  console.log(movie);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate credit={movie}>
            <CreditDetails credit={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Actor details</p>
      )}
    </>
  );
};

export default MoviePage;
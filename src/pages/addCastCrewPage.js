import React from "react";
import { useParams } from 'react-router-dom';
import { getMovieCastCrew } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieCasts from "../components/castsList";

const ActorPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["cast/crew", { id: id }],
    getMovieCastCrew
  );

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
        <MovieCasts movie={movie}></MovieCasts>
        </>
      ) : (
        <p>Waiting for Cast and Crew details</p>
      )}
    </>
  );
};

export default ActorPage;
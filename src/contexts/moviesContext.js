import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
const [myReviews, setMyReviews] = useState( {} ) 
const [favourites, setFavourites] = useState( [] )
const [playlists, setPlaylist] = useState( [] )
const [peoplefav, setPeopleFav] = useState( [] )
const [tvShow, setTvShow] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };
  const addTvToFavourites = (movie) => {
    let newFavourites = [...tvShow];
    if (!tvShow.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setTvShow(newFavourites);
  };
  const addPeopleToFavourites = (credit) => {
    let newPeopleFavourites = [...peoplefav];
    if (!peoplefav.includes(credit.id)) {
      newPeopleFavourites.push(credit.id);
    }
    setPeopleFav(newPeopleFavourites);
  };

  const removeFromPeopleFavourites = (credit) => {
    setPeopleFav( peoplefav.filter(
      (mId) => mId !== credit.id
    ) )
  };

  const addtoplaylist = (movie) => {
    let newPlaylists = [...playlists];
    if (!playlists.includes(movie.id)) {
      newPlaylists.push(movie.id);
    }
    setPlaylist(newPlaylists);
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };


  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist( playlists.filter(
      (mId) => mId !== movie.id
    ) )
  };
  const removeFromTv = (movie) => {
    setTvShow( tvShow.filter(
      (mId) => mId !== movie.id
    ) )
  };
  console.log(playlists)
  return (
    <MoviesContext.Provider
    value={{
      favourites,
      playlists,
      peoplefav,
      tvShow,
      addTvToFavourites,
      addToFavourites,
      addPeopleToFavourites,
      removeFromTv,
      removeFromPeopleFavourites,
      removeFromFavourites,
      removeFromPlaylist,
      addReview,
      addtoplaylist,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
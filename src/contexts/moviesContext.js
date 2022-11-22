import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
const [myReviews, setMyReviews] = useState( {} ) 
const [favourites, setFavourites] = useState( [] )
const [playlists, setPlaylist] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
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
  console.log(playlists)
  return (
    <MoviesContext.Provider
    value={{
      favourites,
      playlists,
      addToFavourites,
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
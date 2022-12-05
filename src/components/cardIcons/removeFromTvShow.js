import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTvShowIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromTvShow = (e) => {
    e.preventDefault();
    context.removeFromTv(movie);
  };
  return (
    <IconButton
      aria-label="remove from Tv Show"
      onClick={handleRemoveFromTvShow}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvShowIcon;
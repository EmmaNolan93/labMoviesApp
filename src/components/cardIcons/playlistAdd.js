import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import  PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const addPlaylist = ({ movie }) => {


  return (
    <IconButton aria-label="add to must Watch">
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default addPlaylist;
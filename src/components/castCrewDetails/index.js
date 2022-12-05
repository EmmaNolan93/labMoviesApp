import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CakeIcon from '@mui/icons-material/Cake';
import StarRate from "@mui/icons-material/StarRate";
import HomeIcon from '@mui/icons-material/Home';
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import NavigationIcon from "@mui/icons-material/Navigation";
const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const CreditDetails = ({ credit }) => { 
  return (
    <>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="also know as:" sx={chip} color="primary" />
        </li>
        {credit.also_known_as.map((g) => (
          <li key={g}>
            <Chip label={g} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<CakeIcon />} label={`${credit.birthday} `} />
        <Chip
          icon={<HomeIcon />}
          label={`${credit.place_of_birth}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${credit.popularity}`}
        />
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip
          label={`Biography`}
        />
        {credit.biography}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
         <Link to={`/credit/tv/${credit.id}`} style={{ textDecoration: 'none' }}>
        <NavigationIcon />
        Tv shows!
        </Link>
      </Fab>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '12em'
        }}
      >
        <Link to={`/credit/movies/${credit.id}`} style={{ textDecoration: 'none' }}>
        <NavigationIcon />
         Movies!
         </Link>
      </Fab>
    </>
  );
};
export default CreditDetails ;
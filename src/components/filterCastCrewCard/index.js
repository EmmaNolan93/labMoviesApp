import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleTypeChange = (e) => {
    handleChange(e, "Cast/Crew", e.target.value);
  };
  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Cast & crew.
        </Typography>
        <TextField
          sx={formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="cast/crew-label">Actor/Crew</InputLabel>
          <Select
            labelId="cast/crew-label"
            id="cast/crew-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleTypeChange}
          ><MenuItem key={"Acting"} value={"Acting"}>
                {"Actor"}
            </MenuItem>  
            <MenuItem key={"Crew"} value={"Crew"}>
                {"Crew"}
            </MenuItem> 
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Cast & Crew.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
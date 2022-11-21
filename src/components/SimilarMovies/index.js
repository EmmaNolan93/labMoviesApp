import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovie } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function SimilarMovie({ movie}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSimilarMovie(movie.id).then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="similar movies table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="center">Overview</TableCell>
            <TableCell align="right">More info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((r, index) => index < 5 && (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.title}
              </TableCell>
              <TableCell >{excerpt(r.overview)}</TableCell>
              <TableCell >
              <Link to={`/movies/${r.id}`}>
                  More info
                </Link>
              </TableCell>
            </TableRow>  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
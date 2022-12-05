import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/favouriteMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import Movies from "./pages/movieDetailsPage";
import Actor from "./pages/addCastCrewPage";
import Upcoming from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMovies from "./pages/topRatedMoviesPage";
import FavouriteMoviesPage from "./pages/favouritePeoplePage";
import CreditDetailsPage from "./pages/creditDetailsPage";
import CreditMoviePage from "./pages/creditMoviePage";
import CreditTvPage from "./pages/creditTvShowPage";
import TvShowDetails from "./pages/tvShowDetails";
import FavouriteTvShowPage from "./pages/favouriteTvShowPage";
import TvShowPage from "./pages/tvShowsPage";
import PopPoeple from "./pages/popPoeplePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
       <SiteHeader />      {/* New Header  */}
       <MoviesContextProvider>
      <Routes>
      <Route exact path="/movies/favourites" element={<MoviePage />} />
      <Route exact path="/movies/playlist" element={<PlaylistMoviesPage />} />
      <Route exact path="/movies/toprated" element={<TopRatedMovies />} />
      <Route exact path="/people/favourites" element={<FavouriteMoviesPage />} />
      <Route exact path="/credit/movies/:id" element={<CreditMoviePage />} />
      <Route exact path="/credit/tv/:id" element={<CreditTvPage />} />
      <Route exact path ="/people/:id" element={<CreditDetailsPage/>} />
      <Route exact path ="/tv/:id" element={<TvShowDetails/>} />
      <Route exact path ="/tv/favourites" element={<FavouriteTvShowPage/>} />
      <Route exact path ="/discover/tvShows" element={<TvShowPage/>} />
      <Route exact path ="/people/Popular" element={<PopPoeple/>} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/credits/:id" element={<Actor />} />
        <Route path="/movies/upcoming" element={<Upcoming/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );
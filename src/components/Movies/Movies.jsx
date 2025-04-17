import React, { useEffect, useState } from "react";
import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../componentExport";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";


const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery} = useSelector((state) => state.currentGenresOrCategories);
  const { data, error, isLoading } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery});
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'))

  const numberOfMovies = lg? 18:20;
  

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error: {error.message || 'Failed to load movies'}</Typography>;

  // Pass data even if it's undefined—let MovieList handle it
  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies}/>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
    </div>
  );
};

export default Movies;
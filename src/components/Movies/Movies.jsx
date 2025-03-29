import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../componentExport";
import { useSelector } from "react-redux";


const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery} = useSelector((state) => state.currentGenresOrCategories);
  const { data, error, isLoading } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery});

  useEffect(() => {
  }, [data, genreIdOrCategoryName]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error: {error.message || 'Failed to load movies'}</Typography>;

  // Pass data even if it's undefined—let MovieList handle it
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
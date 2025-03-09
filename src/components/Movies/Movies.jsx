import React, { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../componentExport";

const Movies = () => {
  const { data, error, isLoading } = useGetMoviesQuery();

  useEffect(() => {
    console.log("Movies data:", data);
  }, [data]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
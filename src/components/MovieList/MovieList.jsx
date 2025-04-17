import React from 'react';
import { Typography } from '@mui/material'; // Import Typography
import { StyledGrid } from './styles';
import { Movie } from '../componentExport';

const MovieList = ({movies, numberOfMovies}) => {
  return (
    <StyledGrid container>
    {movies.results.slice(0, numberOfMovies).map((movie, i) => (
      <Movie movie={movie} i={i}/>
    ))}
    </StyledGrid>
  )


};

export default MovieList;
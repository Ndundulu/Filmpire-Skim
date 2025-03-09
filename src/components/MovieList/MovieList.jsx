import React from 'react';
import { Typography } from '@mui/material'; // Import Typography
import { StyledGrid } from './styles';
import { Movie } from '../componentExport';

const MovieList = ({ movies = { results: [] } }) => {
  console.log('MovieList received movies:', movies); // Debug prop
  console.log('Results array:', movies.results); // Debug results

  return (
    <StyledGrid container>
      {movies.results && movies.results.length > 0 ? (
        movies.results.map((movie, i) => (
          <Movie key={movie.id || i} movie={movie} i={i} />
        ))
      ) : (
        <Typography>No movies to display</Typography>
      )}
    </StyledGrid>
  );
};

export default MovieList;
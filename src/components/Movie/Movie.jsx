import React from 'react'
import { Typography, Grid2, Grow, Tooltip, Rating } from '@mui/material'
import {Link} from 'react-router-dom';
import { TgTitle, StyleGrid } from './style';


export const Movie = (movie, i) => {
    console.log(movie, i)
  return (
    <StyleGrid item xs={12} sm={6} md={4} lg={3} xl={2} >
    <TgTitle variant='h5'>{movie.TgTitle}</TgTitle>
    </StyleGrid>
  )
};

export default Movie;
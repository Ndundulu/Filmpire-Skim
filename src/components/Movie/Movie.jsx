import React from 'react'
import { Typography, Grid2, Grow, Tooltip, Rating } from '@mui/material'
import { TgTitle, StyleGrid, Styledlink, Styledimg,} from './style';


export const Movie = ({movie, i}) => {
  return (
    <StyleGrid item xs={12} sm={6} md={4} lg={3} xl={2} >
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Styledlink to={`/movie/${movie.id}`}>
          <Styledimg
            alt = {movie.title}
            src = {movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
            : `https://www.fillmurray.com/200/300`}            
          />
          <TgTitle variant='h6'>{movie.title}</TgTitle>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
              <div>
            <Rating readOnly value={movie.vote_average/ 2} precision={0.1}/>
              </div>
          </Tooltip>
        </Styledlink>
      </Grow>
    </StyleGrid>
  )
};

export default Movie;

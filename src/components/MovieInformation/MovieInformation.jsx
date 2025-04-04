import React from "react";
import {Typography, Modal, Button, CircularProgress, Box, ButtonGroup, Rating, useMediaQuery, Grid2} from '@mui/material';

import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'; 
import { useGetMovieQuery, useGetRecommendationQuery } from "../../services/TMDB";
import { ButtonContainer, CastImage, ClassModal, GenreImages, GenreLink, GridContainer, GridGenre, Poster,} from "./style";
import Icons from '../../assets/genres';
import { selectGenreOrCategory } from "../../features/currentGenresOrCategories.js";
import { Movie, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { MovieList } from "../componentExport.js";

const Movie_Information = () => {
    const {id} = useParams();
    const { data, isFetching, error} = useGetMovieQuery(id);
    const dispatch = useDispatch();
    const {data: recommendations, isFetching: isFetchingRecommendation, error: recommendationError} = useGetRecommendationQuery({list: 'recommendations',movie_id: id});

    const isMovieFavorited = true;
    const isMovieWatchListed = false;

    const addToFavorite = () => {};
    const addToWatchList = () => {};

    if (isFetching) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center'>
                <CircularProgress size='8rem'/>
            </Box>
        );
    }

    if (error) {
        return <Link to='/'>Something has gone wrong - Go back.</Link>;
    }

    if (isFetchingRecommendation) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center'>
                <CircularProgress size='8rem'/>
            </Box>
        );
    }

    if (recommendationError) {
        console.log("Recommendation Error:")
        return (
            <Box>
                <Typography>Error loading recommendations. Please try again later.</Typography>
                <Link to='/'>Go back</Link>
            </Box>
        );
    }
 
    return (
        console.log("recommendation:", recommendations),
        <GridContainer container spacing={3}>
            {/* Poster */}
            <Grid2 item xs={12} sm={4} lg={3} sx={{display: 'flex', justifyContent: 'center'}}>
                <Poster
                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                    alt={data?.title}
                />
            </Grid2>
            {/* Movie Details */}
            <Grid2 item xs={12} sm={8} lg={9} container direction='column' sx={{marginTop: '20px'}}>
                <Typography variant="h3" align='center' gutterBottom>{data?.title} ({data.release_date.split('-')[0]})</Typography>
                <Typography variant="h5" align="center" gutterBottom>{data?.tagline}</Typography>
                <GridContainer>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <Rating readOnly value={data?.vote_average / 2} precision={0.5} />
                        <Typography variant="subtitle1" sx={{ marginLeft: '10px' }}>
                            {data?.vote_average.toFixed(1)} / 10
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ marginLeft: '20px' }}>
                        {data?.runtime}min / {data.release_date.split('-').join(' ')} / {data?.spoken_languages[0]?.name}
                    </Typography>
                </GridContainer>
                <GridGenre item>
                    {data?.genres?.map((genre) => (
                        <GenreLink key={genre.name} to='/' onClick={() => {dispatch(selectGenreOrCategory(genre.id))}}>
                            <GenreImages src={Icons[genre.name.toLowerCase()]} height={30}/>
                            <Typography color="textPrimary" variant="subtitle1">{genre.name}</Typography>
                        </GenreLink>
                    ))}
                </GridGenre>
                <Typography variant='h5' gutterBottom>Overview</Typography>
                <Box sx={{maxWidth:'800px', margin: "0 auto", marginBottom:'2rem'}}>
                    <Typography>{data?.overview}</Typography>
                </Box>
                <Typography variant='h5' gutterBottom>Top Cast</Typography>
                <Grid2 item container spacing={2}>
                    {data && data.credits.cast.slice(0,6).map((character, i) => (
                        <Grid2 key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{textDecoration: 'none'}}>
                            <CastImage src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
                            <Typography color="textPrimary" variant="subtitle1">{character.name}</Typography>
                            <Typography color='textSecondary' variant="subtitle2">{character.character}</Typography>
                        </Grid2>
                    ))}
                </Grid2>
                <Grid2 item>
                    <ButtonContainer display='flex' direction='row'>
                        <Grid2 item xs={12} sm={6} sx={{marginBottom: '20px'}}>
                            <ButtonGroup size="medium" variant="outlined">
                                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                                <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<Movie/>}>IMDB</Button>
                                <Button target="_blank" rel="noopener noreferrer" href={``} endIcon={<Theaters/>}>Trailer</Button>
                            </ButtonGroup>
                        </Grid2>
                        <Grid2 item xs={12} sm={6}>
                            <ButtonGroup size="small" variant="outlined">
                                <Button onClick={addToFavorite} endIcon={isMovieFavorited ? <Favorite/> : <FavoriteBorderOutlined/>}>
                                    {isMovieFavorited ? "Favorite" : "Unfavorite"}
                                </Button>
                                <Button onClick={addToWatchList} endIcon={isMovieWatchListed ? <PlusOne/> : <Remove/>}>Watchlist</Button>
                                <Button endIcon={<ArrowBack/>}>
                                    <Typography sx={{color: "inherit", textDecoration: 'none'}} variant="subtitle1" component={Link} to='/'>
                                        Back
                                    </Typography>
                                </Button>
                            </ButtonGroup>
                        </Grid2>
                    </ButtonContainer>
                </Grid2>
            </Grid2>
            <Box margin='5rem'>
                <Typography gutterBottom variant="h3" align="center">You may also like...</Typography>
                
                {recommendations ? (
                <MovieList movies={recommendations}/>
                ) : (
                <Box>Sorry, nothing was found</Box>
                )}
            </Box>
        </GridContainer>
    );
};

export default Movie_Information;
import React from "react";
import {Typography, Modal, Button, CircularProgress, Box, ButtonGroup, Rating, useMediaQuery, Grid2} from '@mui/material';
import { PlusOne, ArrowBack, FavoriteBorderOutlined, Favorite, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'; 
import { useGetMovieQuery } from "../../services/TMDB";
import { CastImage, GenreImages, GenreLink, GridContainer, GridGenre, Poster } from "./style";
import Icons from '../../assets/genres';
import { selectGenreOrCategory } from "../../features/currentGenresOrCategories.js";

const Movie_Information = () => {
    const {id} = useParams();
    const { data, isFetching, error} = useGetMovieQuery(id);
    console.log("Movie propaty",data)
    const dispatch = useDispatch()

    if (isFetching) {
        return(
            
            <Box display= 'flex' justifyContent= 'center' alignItems= 'center'>
                <CircularProgress size='8rem'/>
            </Box>
        )
    }

    if (error) {
        return(
            <Link to='/'> Something has gone wrong - Go back.</Link>
        )
    }
    return (
        <GridContainer container>
            <Grid2 item sm={12} lg={4} sx={{display: 'flex', marginBottom: '30px',}}>
                <Poster
                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                    alt= {data?.title}
                />
            </Grid2>
            <Grid2 item container direction='column' lg='7' >
                <Typography variant="h3" align='center' gutterBottom>{data?.title} ({data.release_date.split('-')[0]})</Typography>
                <Typography variant="h5" align="center" gutterBottom > {data?.tagline}</Typography>
                <GridContainer>
                    <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Rating readOnly item value={data?.vote_average / 2}/>
                        <Typography variant="subtitle1" gutterBottom sx={{marginLeft: '10px'}}>  {data?.vote_average} / 10</Typography> 
                    </Box>
                    <Typography variant="h6" align="center" gutterBottom> {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : '' }</Typography>
                </GridContainer>
                <GridGenre item>
                    {data?.genres?.map((genre) => (
                        <GenreLink key = {genre.name} to = '/' onClick={() => {dispatch(selectGenreOrCategory(genre.id))}}>
                            <GenreImages src={Icons[genre.name.toLowerCase()]} height={30}/>
                            <Typography color="textPrimary" variant="subtitle1">{genre.name}</Typography>
                        </GenreLink>
                    ))}
                </GridGenre>
                <Typography variant="h5" gutterBottom sx={{marginTop:'10px'}}> 
                Overview 
                </Typography>
                    <Typography>{data?.overview}</Typography>
                <Typography variant = 'h5' gutterBottom >
                    Top Cast
                </Typography>
                <Grid2 item container spacing={2}>
                    {data && data.credits.cast.map((character, i) => (
                        <Grid2 key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{textDecoration: 'none'}}>
                            <CastImage src={`https://image.tmdb.org/t/p/w500/${character.profile_path} `} alt= {character.name} />
                            <Typography> {character.name}</Typography>
                        </Grid2>
                    ))}
                </Grid2>
                
            </Grid2>
        </GridContainer>
    )
    }



export default Movie_Information;
import React from "react";
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from "../../services/TMDB";
import { Link, useParams } from "react-router-dom";
import { CircularProgress, Grid2, Typography, Box, Button } from "@mui/material";
import { ButtonContainer, GridContainer, Poster } from "./style";
import { ArrowBack } from "@mui/icons-material";
import { MovieList } from "../componentExport";





const Actors = () => {
    const {id} = useParams();
    console.log("id", id)
    const {data, error, isFetching} = useGetActorDetailsQuery(id)
    // const {id, page} = useGetMoviesByActorIdQuery()
    console.log(data) 
    if (isFetching){
            <CircularProgress/>
    }

    return (
        <>
                    <GridContainer container>
            <Grid2 item xs={12} sm={4} lg={3} sx={{display: 'flex', justifyContent: 'center'}}>
                <Poster 
                src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
                alt= {data?.name}
                />
            </Grid2>
            <Grid2 sx={{margin: '200px auto'}}>
                <Typography variant="h2" align="left" gutterBottom>
                    {data?.name}
                </Typography>
                <Typography variant="h5">
                    Born: {new Date(data?.birthday).toDateString()}
                </Typography>
                <Box sx={{maxWidth: "800px", margin: '0px auto', marginBotton: '2rem'}}>
                    <Typography>
                        {data?.biography}
                    </Typography>
                </Box>
                <Box sx={{margin: '20px auto', marginLeft: '60px', display: 'flex', justifyContent: 'space-around'}}>
                    <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
                        imdb
                    </Button>
                    <Button  endIcon={<ArrowBack/>} component={Link} to='/'>
                        Back
                    </Button>
                </Box>
            </Grid2>
        </GridContainer>
        <Box>
            <Typography variant="h2" gutterBottom align="center">Movies</Typography>
            {/* {movies && <MovieList movies={movies} numberOfMovies={12} />} */}
        </Box>
        </>
    )
}

export default Actors;
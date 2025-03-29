import { styled, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";


export const GridContainer = styled(Grid2)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around', 
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap:'wrap',
    },

}))

export const Poster = styled('img')(({theme}) =>({
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em  rgb(64, 64, 70)',
    width: '100%',
    height: 'auto',
    
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        width: '80%',
        height: '350px'

    },
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto',
        width: '60%',
        height: '350px',
        marginBottom: '30px',
    },  
}))

export const GridGenre = styled(Grid2)(({theme})  => ({
    margin: " 10px 0 !important",
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

}))

export const GenreLink = styled(Link)(({theme}) =>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]:{
        padding: '0.5rem, 1rem'
    }
    
}))

export const GenreImages = styled('img')(({theme}) => ({
    filter:  theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px !important'
}))

export const CastImage = styled('img')(({theme}) => ({
    width: '100%',
    maxWidth: '7em',
    height: '8rem',
    objectFit: 'cover',
    borderRadius: '10px'
}))
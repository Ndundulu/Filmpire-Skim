import { styled, Grid2} from "@mui/material";
import { Link, Button } from "react-router-dom";
import {Modal} from '@mui/material';



export const GridContainer = styled(Grid2)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',     
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap:'wrap',
        alignItems: 'center',
    },

}))

export const Poster = styled('img')(({ theme }) => ({
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '100%',
    maxWidth: '370px',
    aspectRatio: '2/3', // Maintain a 2:3 aspect ratio for movie posters
    objectFit: 'contain',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        width: '80%',
        aspectRatio: '2/3', // Keep aspect ratio instead of fixed height
    },
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto',
        width: '60%',
        aspectRatio: '2/3', // Keep aspect ratio instead of fixed height
        marginBottom: '30px',
    },
}));


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
    maxWidth: '8em',
    height: '8rem',
    objectFit: 'cover',
    borderRadius: '10px'
}))

export const ButtonContainer = styled(Grid2)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column'
    },

}))

export const ClassModal =  styled(Modal)(() => ({
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
}))

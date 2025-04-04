import { styled, Grid2, Button } from "@mui/material";

export const GridContainer = styled(Grid2)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',     
    margin: '0px 0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap:'wrap',
        alignItems: 'center',
    },

}))

export const Poster = styled('img')(({theme}) => ({
        borderRadius: '20px',
        boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
        width: '100%',
        maxWidth: '400px',
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
}))

export const ButtonContainer = styled(Grid2)(({theme}) => ({

}))
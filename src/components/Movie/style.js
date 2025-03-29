import { Scale, Transform } from "@mui/icons-material";
import {Typography, Grid2 } from "@mui/material";
import {Link} from 'react-router-dom';
import { hover } from "@testing-library/user-event/dist/hover";
import { styled } from "@mui/material/styles";


export const StyleGrid = styled(Grid2)(({theme}) => ({
    padding: '10px',
}))

export const TgTitle = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'noWrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign : 'center'

}))


export const Styledimg = styled('img')(() => ({
    borderRadius: "20px", 
    height: '300px',
    width: '100%',
    marginBottom: '10px',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}))

export const Styledlink = styled(Link)(({theme}) => ({
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme?.breakpoints?.up('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    '&:hover' : {
        cursor: 'pointer',
       
    },
}))

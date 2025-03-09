import { styled, Typography, Grid2 } from "@mui/material";


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

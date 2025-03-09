import React from "react"
import { styled } from "@mui/material"
import {Grid2} from '@mui/material'


export const StyledGrid = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexWrap: "wrap",
    overflow: "",
    justifyContent: "space-between",

    [theme.breakpoints.down('sm')]: {
        justifyContent:'center'
    }
    
}))
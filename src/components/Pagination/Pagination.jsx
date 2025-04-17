import React from "react";
import {Typography, Button} from "@mui/material";
import { ButtonStyling, Container, Typostyling } from "./style";


const Pagination = ({currentPage, totalPages, setPage}) => {
    const handlePrev = () => {
        if (currentPage !== 1){
            setPage((prevPage) => prevPage - 1)
        }
    };
    const handleNext = ( ) => {
        if (currentPage !== totalPages){
            setPage((prevPage) => prevPage + 1)
        }
    };



    return (
        <Container>
            <ButtonStyling onClick={handlePrev} type="button" variant="contained" color="primary">Prev</ButtonStyling>
            <Typostyling variant="h4">{currentPage}</Typostyling>
            <ButtonStyling onClick={handleNext} variant="contained" >Next</ButtonStyling>
        </Container>
    )
}


export default Pagination
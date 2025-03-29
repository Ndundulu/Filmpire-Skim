import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes} from 'react-router-dom';
import { Root, Div} from './styling_RD_App.js'
import {Movies, Movie_Information, Profile, NavBar, Actors} from './componentExport.js';
import {useMediaQuery} from '@mui/material'



const App = () => {
    const isMobile = useMediaQuery("(max-width:600px)"); // Moved inside component

    // Responsive styles for <main>
    const mainStyles = {
        flexGrow: 1,
        padding: isMobile ? '80px 16px 24px 16px' : '80px 24px 24px 24px',
        width: isMobile ? '100%' : 'calc(100% - 240px)',
        maxWidth: isMobile ? '100%' : '100%',
        marginLeft: isMobile ? '0' : '240px',
        marginRight: 'auto',
    }
    return (
    <Root>
        <CssBaseline />
        <NavBar/>
        <main style={mainStyles}>
            <Routes>
                <Route path="/" element={<Movies/>} />               
                <Route path="/movie/:id" element={<Movie_Information/>} />
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/actors/:id" element={<Actors/>}/>
            </Routes>
        </main>
    </Root>
    )
};
   
export default App;
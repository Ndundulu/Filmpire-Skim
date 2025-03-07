import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes} from 'react-router-dom';
import {Main, Root, Div} from './styling_RD_App.js'
import {Movies, Movie_Information, Profile, NavBar, Actors} from './componentExport.js';



const App = () => {
    return (
    <Root>
        <CssBaseline />
        <NavBar/>
        <Main>
            <Routes>
                <Route path="/" element={<Movies/>} />
                
                <Route path="/movie/:id" element={<Movie_Information/>} />
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/actors/:id" element={<Actors/>}/>
            </Routes>
        </Main>
    </Root>
    )
};
   
export default App;
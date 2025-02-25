import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes} from 'react-router-dom';
import {Main, Root, Div} from './styles.js'
import {Movies, Movie_Information, Profile, NavBar, Actors} from './index.js';



const App = () => {
    return (
    <Root>
        <CssBaseline />
        <NavBar/>
        <Div>
        <Main>
            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/movie/:id" element={<Movie_Information/>} />
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/actors/:id" element={<Actors/>}/>
            </Routes>
        </Main>
        </Div>
    </Root>
    )
};
   
export default App;
import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Root, Div } from "./styling_RD_App.js";
import {
  Movies,
  Movie_Information,
  Profile,
  NavBar,
  Actors,
} from "./componentExport.js";
import PopularMoviesSlider from "./PopularMoviesSlider/PopularMoviesSlider.jsx";
import { useMediaQuery } from "@mui/material";

const App = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Moved inside component
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Responsive styles for <main>
  const mainStyles = {
    flexGrow: 1,
    padding: isMobile ? "24px 16px 24px 16px" : "24px 24px 24px 24px",
    width: isMobile ? "100%" : "calc(100% - 240px)",
    maxWidth: isMobile ? "100%" : "100%",
    marginLeft: isMobile ? "0" : "240px",
    marginRight: "auto",
    marginTop: "80px",
  };

  const sliderWrapperStyles = {
    width: isMobile ? "100%" : "calc(100% - 240px)",
    marginLeft: isMobile ? "0" : "240px",
    marginBottom: "-74px",
  };

  return (
    <Root>
      <CssBaseline />
      <NavBar />
      {isHomePage && (
        <div style={sliderWrapperStyles}>
          <PopularMoviesSlider />
        </div>
      )}
      <main style={mainStyles}>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie_Information />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </Root>
  );
};

export default App;

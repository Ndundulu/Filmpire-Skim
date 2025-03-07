import React, { useState } from "react";
import { Button, useMediaQuery, Avatar, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppBar, StyledToolbar, StyledIconButton, StyleIconbutton2, StyledDrawerbg, StyleNav } from "./style.js"; 
import { Brightness7, Brightness4, AccountCircle } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SideBar } from "../componentExport.js"; // Adjust import path as needed

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const theme = useTheme();
    const isAuthenticated = false;
    const ismale = false;

    return (
        <>
            <StyledAppBar position="fixed">
                <StyledToolbar>
                    {isMobile && (
                        <StyledIconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)}>
                            <MenuIcon />
                        </StyledIconButton>
                    )}
                    <StyleIconbutton2 color='inherit' sx={{ml:1}} onClick={() => {}}>
                        {theme.palette.mode === "dark" ? <Brightness7/> : <Brightness4/>}
                    </StyleIconbutton2>
                    {!isMobile && <IconButton sx={{color:'white'}}> Search...<SearchIcon/> </IconButton>}
                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={() => {}}>
                                <> Login  </> <AccountCircle />
                            </Button>
                        ) : (
                            <Button 
                                color='inherit' 
                                component={Link}
                                to={`/profile/:id`}
                                onClick={() => {}}
                            >
                                {!isMobile && <>My Movies  </>}
                                {ismale ? (
                                    <Avatar
                                        style={{width:30, height: 30}}
                                        alt="profile"
                                        src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
                                    />
                                ) : (
                                    <Avatar
                                        style={{width:30, height: 30}}
                                        alt="profile"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWO4c2-HYw95SMxCc10AkxJ7bETMnXlivyY5Cw4f-6NmV2nTOWN_zG3onmbVO98Ohxj0w&usqp=CAU"
                                    /> 
                                )}
                            </Button>
                        )}
                    </div>
                    {isMobile && <IconButton sx={{color:'white'}}><SearchIcon/></IconButton>}
                </StyledToolbar>
            </StyledAppBar>
            <div>
                <StyleNav>
                    {isMobile ? (
                        <StyledDrawerbg
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={() => setMobileOpen(false)}
                            ModalProps={{keepMounted: true}}
                        >
                            <SideBar setMobileOpen={setMobileOpen}/>
                        </StyledDrawerbg>
                    ) : (
                        <StyledDrawerbg variant="permanent" open>
                            <SideBar setMobileOpen={setMobileOpen}/>
                        </StyledDrawerbg>
                    )}
                </StyleNav>
            </div>
        </>
    );
};

export default NavBar;
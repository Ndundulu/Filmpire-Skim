import React, { useState, useEffect, useContext } from "react";
import { Button, useMediaQuery, Avatar, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppBar, StyledToolbar, StyledIconButton, StyleIconbutton2, StyledDrawerbg, StyleNav } from "./style.js"; 
import { Brightness7, Brightness4, AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { SideBar, Search } from "../componentExport.js";
import { fetchToken, createSessionId, moviesAPI } from "../../utils/index.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth.js";
import ToggleColormode from "../../utils/ToggleColormode.jsx";
import { ColorModeContext } from "../../utils/ToggleColormode.jsx";


const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const theme = useTheme();
    const dispatch = useDispatch()

    const colorMode = useContext(ColorModeContext)
    const {isAuthenticated, user} = useSelector(userSelector)
    const ismale = true;
    const nbsp = '\u00A0';
    const token = localStorage.getItem('request_token');
    const sessionIdFromLocalHost = localStorage.getItem('session_id');
    console.log(user)
    useEffect(() => {
        const logInUser = async () => {
            if (token) {
                try{
                    let userData;
                    if (sessionIdFromLocalHost ) {
                        const {data} = await moviesAPI.get(`/account?session_id=${sessionIdFromLocalHost}`)
                        userData = data;                    
                    } else {
                        const sessionId = await createSessionId();
                        const {data} = await moviesAPI.get(`/account?session_id=${sessionId}`)
                        userData = data;
                    }
                    dispatch(setUser(userData))
                }catch(error){
                    console.log('Failed to log in user:', error)
                }

            }
        };
        logInUser();
    },[token, dispatch])

    return (
        <>
            <StyledAppBar position="fixed">
                <StyledToolbar>
                    {isMobile && (
                        <StyledIconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)}>
                            <MenuIcon style={{width:'30', height:'30'}} />
                        </StyledIconButton>
                    )}
                    <StyleIconbutton2 color='inherit' sx={{ml:1}} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? <Brightness7 style={{width:'30', height:'30'}}/> : <Brightness4 style={{width:'30', height:'30'}}/>}
                    </StyleIconbutton2>
                    {!isMobile && <Search/>}
                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={fetchToken}>
                                <> Login  </> <AccountCircle />
                            </Button>
                        ) : (
                            <Button 
                                color='inherit' 
                                component={Link}
                                to={`/profile/${user?.id}`}
                                onClick={() => {}}
                            >
                                {!isMobile && <>My Movies {nbsp} {nbsp} </>}
                                <Avatar
                                    style={{width:30, height: 30}}
                                    alt="profile"
                                    src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
                                />
                            </Button>
                        )}
                    </div>
                    {isMobile && <Search/>}
                </StyledToolbar>
            </StyledAppBar>
            <div>
                <StyleNav>
                    {isMobile ? (
                        <StyledDrawerbg
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={() => {setMobileOpen(false)}}
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
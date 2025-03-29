import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import {Typography, Button, Box} from '@mui/material'
import {ExitToApp} from '@mui/icons-material'

const logout = () => {
 
        localStorage.clear();

        window.location.href = '/';
}
const Profile = () => {
    const {user} = useSelector(userSelector)
    const favorite = [];
    return (   
        <Box>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant="h3" sx={{ color: '#1976d2' }}>My Profile</Typography>
                <Button color='inherit' onClick={logout} >
                    Logout &nbsp; <ExitToApp/>
                </Button>
            </Box>
            {!favorite.length ? 
                <Typography variant="h4" sx={{ color: '#757575' }}>
                Add favorites or watchlist some movies to see them here!
                </Typography> 
                :
                <Typography variant="h4" sx={{ color: '#388e3c' }}>
                Favorite Movies
                </Typography>  
            }
        </Box>

    )

}


export default Profile;
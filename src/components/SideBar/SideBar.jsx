import React from "react";
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { StyleLink, StyleImg, DcLink, GenreImages } from "./style.js";

const Categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Action', value: 'action' },
    { label: 'Horror', value: 'horror' },
    { label: 'Animation', value: 'animation' }, // Fixed typo
];

const SideBar = ({ setMobileOpen }) => {
    const theme = useTheme();
    const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
    const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

    return (
        
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <StyleLink to='/'>
                <StyleImg
                    src={theme.palette.mode === 'light' ? redLogo : blueLogo}
                    alt="Filmpire logo"
                />
            </StyleLink>
            <Divider />
            <List>
                <ListSubheader>Genre</ListSubheader>
                {Categories.map((category) => (
                    <DcLink>
                        <ListItem>
                            {/* <ListItemIcon>
                                <GenreImages src={redLogo} height={30}/>
                            </ListItemIcon> */}
                            <ListItemText primary={category.label} />
                        </ListItem>
                    </DcLink>
                ))}
            </List>
            <List>
                <ListSubheader>Categories</ListSubheader>
                {demoCategories.map((category) => (
                    <DcLink key={category.value} to={`/${category.value}`}>
                        <ListItem onClick={() => {}} button>
                            {/* <ListItemIcon>
                                <GenreImages src={redLogo} height={30} />
                            </ListItemIcon> */}
                            <ListItemText primary={category.label} />
                        </ListItem>
                    </DcLink>
                ))}
            </List>
        </Box>
    );
};

export default SideBar;
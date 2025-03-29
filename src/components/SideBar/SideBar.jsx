import React, { useState } from "react";
import { Box, CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { StyleLink, StyleImg, DcLink, GenreImages } from "./style.js";
import { useGetGenresQuery } from "../../services/TMDB.js";
import Icons from '../../assets/genres';
import { useDispatch, useSelector} from 'react-redux'
import { selectGenreOrCategory } from "../../features/currentGenresOrCategories.js";


const Categories = [
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
];


const SideBar = ({ setMobileOpen }) => {
    const {genreIdOrCategoryName} = useSelector((state) => state.currentGenresOrCategories);
    const theme = useTheme();
    const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
    const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
    const {data, error, isFetching} = useGetGenresQuery();
    console.log(data)
    const Dispatch = useDispatch();
    const [SelectedItem, setSelectedItem] = useState(null)
    // const Selector = useSelector();

    const handleClick = (value) => () => {
        Dispatch(selectGenreOrCategory(value))
        setSelectedItem(value)
    }
    

    return (
        
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                overflow: 'auto'
            }}
        >
            <StyleLink to='/'>
                <StyleImg
                    src={theme.palette.mode === 'light' ? redLogo : blueLogo}
                    alt="Filmpire logo"
                />
            </StyleLink>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {Categories.map(({label, value}) => (
                    <DcLink to='/'>
                        <ListItem onClick= {handleClick(value)}  button
                        sx={{background: SelectedItem === value ? '#E0E0E0' : 'inherit'}}>
                            <ListItemIcon>
                                <GenreImages src={Icons[label.toLowerCase()]} height={30} />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </DcLink>
                ))}
            </List>
            <List>
                <ListSubheader>Genre</ListSubheader>
                {isFetching? (
                    <Box display="flex" justifyContent='center'>
                        <CircularProgress/>
                    </Box>
                ):(                    
                    data.genres.map(({name, id}) => (
                    <DcLink key={name} to='/'>
                        <ListItem onClick={handleClick(id)} button  sx={{background: SelectedItem === id ? '#D8D8D8' : 'inherit'}}>
                            <ListItemIcon>
                                <GenreImages src={Icons[name.toLowerCase()]} height={30} /> 
                            </ListItemIcon> 
                            <ListItemText primary={name} />
                        </ListItem>
                    </DcLink>
                )))}
            </List>
        </Box>
    );
};

export default SideBar;
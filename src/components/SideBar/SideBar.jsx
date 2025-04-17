import React, { useState } from "react";
import { Box, CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { StyleLink, StyleImg, DcLink, GenreImages } from "./style.js";
import { useGetGenresQuery } from "../../services/TMDB.js";
import Icons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from "../../features/currentGenresOrCategories.js";
import RedLogo from '../../assets/genres/BBb.png'; // Updated to RedLogo.png
import GoldLogo from '../../assets/genres/Gww.png'; // Updated to GoldLogo.png

const Categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const SideBar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenresOrCategories);
  const theme = useTheme();
  const { data, error, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (value) => () => {
    dispatch(selectGenreOrCategory(value));
    setSelectedItem(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
        backgroundColor:  theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <StyleLink to='/'>
        <StyleImg
          src={theme.palette.mode === 'light' ? RedLogo : GoldLogo} // Updated variable names
          alt="Filmpire logo"
        />
      </StyleLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <DcLink key={value} to='/'>
            <ListItem
              onClick={handleClick(value)}
              button
              sx={{
                backgroundColor: selectedItem === value ? theme.palette.action.selected : 'inherit',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
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
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <DcLink key={id} to='/'>
              <ListItem
                onClick={handleClick(id)}
                button
                sx={{
                  backgroundColor: selectedItem === id ? theme.palette.action.selected : 'inherit',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon>
                  <GenreImages src={Icons[name.toLowerCase()]} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </DcLink>
          ))
        )}
      </List>
    </Box>
  );
};

export default SideBar;
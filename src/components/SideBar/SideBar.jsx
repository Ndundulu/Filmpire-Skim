import React, { useState } from "react";
import { Box, CircularProgress, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { StyleLink, StyleImg, DcLink, GenreImages } from "./style.js";
import { useGetGenresQuery } from "../../services/TMDB.js";
import Icons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from "../../features/currentGenresOrCategories.js";

const Categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const SideBar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenresOrCategories);
  const theme = useTheme();
  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
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
        backgroundColor: theme.palette.background.default, // Apply theme background
        color: theme.palette.text.primary, // Ensure text adapts
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
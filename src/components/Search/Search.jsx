import React, { useState, useEffect } from 'react';
import { StyledDiv, StyledTextField } from './style.js';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { searchMovie } from '../../features/currentGenresOrCategories.js';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  // Debounce timer
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== '') {
        dispatch(searchMovie(query));
      }
    }, 1000); // waits 0.5 seconds after typing stops

    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  if (location.pathname !== '/') return null;

  return (
    <StyledDiv>
      <StyledTextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        style={{ color: 'white' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ color: 'white' }}>
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </StyledDiv>
  );
};

export default Search;

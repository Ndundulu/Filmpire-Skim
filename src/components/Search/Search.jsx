// src/components/Search/Search.jsx
import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/currentGenresOrCategories'; // adjust path if needed

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  // 🔄 Real-time search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== '') {
        dispatch(searchMovie(query)); // call your redux action
      }
    }, 400); // wait 0.4s after user stops typing

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <div className="md:flex-1 md:px-60" style={{ flexGrow: 1, padding: '0 16px' }}>
      <TextField
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#ccc' }} />
            </InputAdornment>
          ),
          style: {
            color: 'white',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            height: '38px',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: '1px solid rgba(255,255,255,0.2)' },
            '&:hover fieldset': { border: '1px solid #fff' },
            '&.Mui-focused fieldset': { border: '1px solid #fff' },
          },
          '& input::placeholder': { color: '#aaa', opacity: 0.8 },
        }}
      />
    </div>
  );
};

export default Search;



import React, {useState, useEffect} from 'react'
import { StyledDiv, StyledTextField } from './style.js';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment} from '@mui/material';
import { searchMovie } from '../../features/currentGenresOrCategories.js';



const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const handleKeyPress = (event) => {
      if (event.key === 'Enter'){
        dispatch(searchMovie(query))
      }
    }

  return (
    <StyledDiv>
        <StyledTextField
            onKeyDown= {handleKeyPress}
            value = {query}
            onChange = {(e) => setQuery(e.target.value)}
            variant='standard'
            style={{
              color:'white'
            }}
            slotProps= {{
              input: {

                startAdornment: (
                  <InputAdornment position='start'sx={{color:'white'}}>
                    <SearchIcon/>
                  </InputAdornment>
                ),

              }
            }}
        />
    </StyledDiv>
  )
}

export default Search;

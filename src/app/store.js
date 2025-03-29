import {configureStore} from '@reduxjs/toolkit'
import {tmdbApi} from '../services/TMDB.js'
import  genreOrCategoryReducer  from '../features/currentGenresOrCategories.js';
import userReducer from '../features/auth.js'

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath] : tmdbApi.reducer,
        currentGenresOrCategories: genreOrCategoryReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware), // Add the middleware
    });
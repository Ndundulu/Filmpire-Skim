import {configureStore} from '@reduxjs/toolkit'
import {tmdbApi} from '../services/TMDB.js'

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath] : tmdbApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware), // Add the middleware
    });
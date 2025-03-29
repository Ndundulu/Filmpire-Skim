import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { selectGenreOrCategory } from "../features/currentGenresOrCategories";
import { type } from "@testing-library/user-event/dist/type";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;


export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        //* Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        // Get movies by [type]
        getMovies: builder.query({
            query: ({genreIdOrCategoryName, page, searchQuery}) => {   
                if (searchQuery){
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
                }
                //Get movie by genre
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName == 'string'){
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                }
                // Get movie by Categories
                if (genreIdOrCategoryName  && typeof genreIdOrCategoryName == 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                }
                return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`
            }
        }),
        //Get Movie
        getMovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
        })
    }),
}) ;

export const {useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery} = tmdbApi;
import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, MOVIE_LOADING } from './types'



export const getMovies = () => {
    return{
        type: GET_MOVIES
    };

};

export const deleteMovie = (id) => {
    return{
        type: DELETE_MOVIE,
        payload: id
    };

};

export const addMovie = (item) => {
    return{
        type: ADD_MOVIE,
        payload: item
    };

};

export const setItemsLoading = () => {
    return {
      type: MOVIE_LOADING
    };
  };

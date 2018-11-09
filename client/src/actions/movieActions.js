import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, MOVIE_LOADING } from './types'

import axios from 'axios';


export const getMovies = () => dispatch => {
    dispatch(setMoviesLoading());
    axios
        .get('/api/movies')
        .then(res =>
        dispatch({
          type: GET_MOVIES,
          payload: res.data
        })
      );

};

export const deleteMovie = (id) => dispatch => {
    axios.delete(`/api/movies/${id}`).then(res =>
        dispatch({
          type: DELETE_MOVIE,
          payload: id
        })
      );

};

export const addMovie = (movie) => dispatch => {
    axios.post('/api/movies', movie).then(res =>
        dispatch({
          type: ADD_MOVIE,
          payload: res.data
        })
      );

};

export const setMoviesLoading = () => {
    return {
      type: MOVIE_LOADING
    };
  };

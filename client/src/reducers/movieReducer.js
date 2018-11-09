import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE, MOVIE_LOADING } from '../actions/types';

const initialState = {
    movies:[],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
        return {
            ...state,
            movies: action.payload,
            loading: false
        };
        case DELETE_MOVIE:
        return {
            ...state,
            movies: state.movies.filter(movie => movie._id !== action.payload)
        };
        case ADD_MOVIE:
        return {
            ...state,
            movies: [action.payload, ...state.movies]
        };
        case MOVIE_LOADING:
        return {
            ...state,
            loading: true
        };
        default:
            return state;
    }


}

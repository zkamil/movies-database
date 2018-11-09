import uuid from 'uuid';
import { GET_MOVIES, ADD_MOVIE, DELETE_MOVIE } from '../actions/types';

const initialState = {
    movies:[
        {id: uuid(), name: 'BatMan' },
        {id: uuid(), name: 'The Dark Knight' },
        {id: uuid(), name: 'Avengers' },
        {id: uuid(), name: 'Justice League' },
        {id: uuid(), name: 'Doctor Strange' },
        {id: uuid(), name: 'Arun Kuruvilla' },
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MOVIES:
        return {
            ...state
        };
        case DELETE_MOVIE:
        return {
            ...state,
            movies: state.movies.filter(movie => movie.id !== action.payload)
        };
        case ADD_MOVIE:
        return {
            ...state,
            items: [action.payload, ...state.movies]
        }
        default:
            return state;
    }
}

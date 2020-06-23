import { initialState } from '../initialState';
import {
    UPDATE_MOVIES_ARR,
    INCREASE_MOVIES_ARR,
    UPDATE_SEARCH_WORD,
    UPDATE_FILTER,
    UPDATE_SORTING,
    UPDATE_MOVIES_PAGE,
    SHOW_MOVIE
} from '../actions/actions'

export function reducer (state = initialState, action ) {
    // console.log('action->', action, ' state->', state);

    switch (action.type) {
        case UPDATE_MOVIES_ARR:
            return {
                ...state,
                moviesList: action.moviesArr,
            };

        case INCREASE_MOVIES_ARR:
            return {
                ...state,
                moviesList: state.moviesList.concat(action.moviesArr)
            };

        case UPDATE_SEARCH_WORD:
            return {
                ...state,
                searchParams : {
                    ...state.searchParams,
                    searchWord: action.searchWord
                },
            };

        case UPDATE_FILTER:
            return {
                ...state,
                searchParams : {
                    ...state.searchParams,
                    filterBy: action.filterBy
                },
            };

        case UPDATE_SORTING:
            return {
                ...state,
                searchParams : {
                    ...state.searchParams,
                    sortBy: action.sortBy
                },
            };
        case UPDATE_MOVIES_PAGE:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    offset: action.offset
                },
            };
        case SHOW_MOVIE:
            return {
                ...state,
                chosenMovie: action.chosenMovie,
            };
        default:
            return state;
    }
}

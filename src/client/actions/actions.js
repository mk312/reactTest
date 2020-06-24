import fetch from 'cross-fetch';

export const UPDATE_MOVIES_ARR = 'UPDATE_MOVIES_ARR';
export const INCREASE_MOVIES_ARR = 'INCREASE_MOVIES_ARR';
export function requestMoviesArr(searchParams) {
    return dispatch =>{
        let reqestParamsArr = [];

        searchParams.searchWord && reqestParamsArr.push(`search=${searchParams.searchWord}`);
        searchParams.sortBy && reqestParamsArr.push(`sortBy=${searchParams.sortBy=='DATE'? 'release_date' : 'vote_average'}&sortOrder=desc`);
        searchParams.filterBy && reqestParamsArr.push(`searchBy=${searchParams.filterBy == 'TITLE' ? 'title' : 'genres'}`);
        searchParams.offset && reqestParamsArr.push(`offset=${searchParams.offset*15}`);
        reqestParamsArr.push('limit=15');

        let requestPostfix = reqestParamsArr.length && ('?' + reqestParamsArr.join('&'));

        return (async () => {
            const response = await fetch('https://reactjs-cdp.herokuapp.com/movies' + requestPostfix);
            const res = await response.json();
            return dispatch({type: (!searchParams.offset? UPDATE_MOVIES_ARR : INCREASE_MOVIES_ARR), moviesArr: res.data});
        })();
    }
}

export const UPDATE_SEARCH_WORD= 'UPDATE_SEARCH_WORD';
export function updateSearchWord(searchWord) {
    return dispatch =>dispatch({type: UPDATE_SEARCH_WORD, searchWord: searchWord});
}

export const UPDATE_FILTER= 'UPDATE_FILTER';
export function updateFilter(filterBy) {
    return dispatch => dispatch({type: UPDATE_FILTER, filterBy: filterBy});
}

export const UPDATE_SORTING = 'UPDATE_SORTING';
export function updateSorting(sortBy) {
    return dispatch => dispatch({type: UPDATE_SORTING, sortBy: sortBy});
}

export const UPDATE_MOVIES_PAGE = 'UPDATE_MOVIES_PAGE';
export function updateMoviesPage(offset) {
    return dispatch => dispatch({type: UPDATE_MOVIES_PAGE, offset: offset});
}


export const SHOW_MOVIE = 'SHOW_MOVIE';
export function showMovie(chosenMovie) {
    return dispatch => dispatch({type: SHOW_MOVIE, chosenMovie: chosenMovie});
}

import { reducer } from '../reducer';
import * as actions from '../../actions/actions';
import { initialState } from '../../initialState';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: 'noTypeInReducer'})).toEqual(initialState);
    });

    it('should update and increase MOVIES ARR in the state', () => {
        let stateArr = reducer(undefined, {
            type: actions.INCREASE_MOVIES_ARR,
            moviesArr: [{a:1, b:2}, {c:3, d:4}]
        });
        expect(stateArr).toEqual({
                ...initialState,
                moviesList: [{a:1, b:2}, {c:3, d:4}]
        });

        stateArr = reducer(stateArr, {
            type: actions.INCREASE_MOVIES_ARR,
            moviesArr: [{e:5}]
        });
        expect(stateArr).toEqual({
            ...initialState,
            moviesList: [{a:1, b:2}, {c:3, d:4}, {e:5}],
        });
    });

    it('should update SORTING', () => {
        const stateArr = reducer(undefined, {
            type: actions.UPDATE_SORTING,
            sortBy: 'anything'
        });
        expect(stateArr.searchParams.sortBy).toBe('anything');
    });

    it('should update FILTER', () => {
        const stateArr = reducer(undefined, {
            type: actions.UPDATE_FILTER,
            filterBy: 'anything'
        });
        expect(stateArr.searchParams.filterBy).toBe('anything');
    });

    it('should update MOVIES PAGE', () => {
        const stateArr = reducer(undefined, {
            type: actions.UPDATE_MOVIES_PAGE,
            offset: 'anything'
        });
        expect(stateArr.searchParams.offset).toBe('anything');
    });

    it('should update MOVIE', () => {
        const stateArr = reducer(undefined, {
            type: actions.SHOW_MOVIE,
            chosenMovie: {a:1}
        });
        expect(stateArr.chosenMovie).toEqual({a:1});
    });
});
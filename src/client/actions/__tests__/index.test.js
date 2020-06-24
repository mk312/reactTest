import * as actions from '../actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { initialState } from '../../initialState';
import { moviesList } from '../../components/mockMoviesList';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const testString = 'testString';
let testSearchParams = initialState.searchParams;
let store;
describe('actions', () => {
    beforeEach(() => {
        const mockSuccessResponse = {data: moviesList.data };
        store = mockStore({ initialState });
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockSuccessResponse),
            })
        );
    });

    it('should perform updateSearchWord', () => {
        const expectedActions = [{ type: actions.UPDATE_SEARCH_WORD, searchWord: testString}]
        store.dispatch(actions.updateSearchWord(testString));
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should perform updateFilter', () => {
        const expectedActions = [{ type: actions.UPDATE_FILTER, filterBy: testString}]
        store.dispatch(actions.updateFilter(testString));
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should perform updateSorting', () => {
        const expectedActions = [{ type: actions.UPDATE_SORTING, sortBy: testString}]
        store.dispatch(actions.updateSorting(testString));
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should perform updateMoviesPage', () => {
        const expectedActions = [{ type: actions.UPDATE_MOVIES_PAGE, offset: testString}]
        store.dispatch(actions.updateMoviesPage(testString));
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should perform showMovie', () => {
        const expectedActions = [{ type: actions.SHOW_MOVIE, chosenMovie: testString}]
        store.dispatch(actions.showMovie(testString));
        expect(store.getActions()).toEqual(expectedActions)
    });

    it('should perform requestMoviesArr and update', done => {
        const testArrSearchParams = {...initialState.searchParams, offset: null};
        const expectedActions = [{ type: actions.UPDATE_MOVIES_ARR, moviesArr: moviesList.data}];
        store.dispatch(actions.requestMoviesArr(testArrSearchParams)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        })
    });

    it('should perform requestMoviesArr and increase', done => {
        const testArrSearchParams = {...initialState.searchParams, offset: 2};
        const expectedActions = [{ type: actions.INCREASE_MOVIES_ARR, moviesArr: moviesList.data}];
        store.dispatch(actions.requestMoviesArr(testArrSearchParams)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        })
    });
});
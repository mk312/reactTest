import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './../../../reducers/reducer';
import ReduxThunk from 'redux-thunk';
import {Simulate} from 'react-dom/test-utils';
import {render, fireEvent} from '@testing-library/react'
import { moviesList } from './../../mockMoviesList';
import App from '../index';

let container = null;
let store  = createStore(reducer, applyMiddleware(ReduxThunk));
describe('App', () => {
    beforeAll(() => {
        const mockSuccessResponse = {data: moviesList.data };
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockSuccessResponse),
            })
        );
    });
    beforeEach(() => {
        store = createStore(reducer, applyMiddleware(ReduxThunk));
        container = render(
            <Provider store={store}>
                <App info='React Test App, PartI'/>
            </Provider>
        ).container;
    });

    it('should show movieDetails when movieItem is clicked()', () => {
        const button = document.querySelector('.js-movie-item a');
        fireEvent.click(
            button, new Event('click')
        );

        expect(document.querySelectorAll('.js-movie-details').length).toBe(1);
        // re-check with snapshot
        expect(container).toMatchSnapshot();
    });

    it('should show itemsList result when new search value is submitted', () => {
        const searchInput = document.querySelector('.js-search-input');
        const searchForm = document.querySelector('.js-search-form');
        const searchValues = [
            'Quentin Tarantino',
            'noMatchesRequest'
        ]
        searchValues.forEach((searcString)=>{
            fireEvent.change(searchInput, { target: { value: searcString}});
            fireEvent.submit(
                searchForm
            );
            const moviesNumber = document.querySelectorAll('.js-movie-item').length;

            expect(moviesNumber).toBe(moviesList.data.length);
            // re-check with snapshot
            expect(container).toMatchSnapshot();
        })
    });
});
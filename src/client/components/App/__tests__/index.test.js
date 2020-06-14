import React from 'react';
import {Simulate} from 'react-dom/test-utils';
import {render, fireEvent} from '@testing-library/react'

import { moviesList } from './../../mockMoviesList';

import App from '../index';

let container = null;

describe('App', () => {
    beforeEach(() => {
        container = render(<App />);
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

    it('should show new itemsList result/no_items_found) when new search value is submitted', () => {
        const searchInput = document.querySelector('.js-search-input');
        const searchForm = document.querySelector('.js-search-form');
        const searchValues = [
            'Quentin Tarantino',
            'depardieu'
        ]
        searchValues.forEach((searcString)=>{
            fireEvent.change(searchInput, { target: { value: searcString}});
            fireEvent.submit(
                searchForm
            );
            const moviesNumber = document.querySelectorAll('.js-movie-item').length;

            expect(moviesNumber).toBe(searcString=='Quentin Tarantino'? moviesList.length : 0);
            // re-check with snapshot
            expect(container).toMatchSnapshot();
        })
    });
});
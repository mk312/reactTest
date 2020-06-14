import React from 'react';
import {Simulate} from 'react-dom/test-utils';
import {render} from '@testing-library/react'

import ItemsList from '../index';
import { moviesList } from './../../mockMoviesList';

let container = null;

describe('App', () => {
    beforeEach(() => {
        container = render(<ItemsList moviesList = {moviesList}/>);
    });
    it('should toggle between Date/Rating when one of them is clicked', () => {
        const radio = [
            {id:'sv1', value: 'DATE'},
            {id:'sv2', value: 'RATING'},
        ]
        radio.forEach ((item) => {
            const toggleButton = document.getElementById(`${item.id}`);
            Simulate.change(toggleButton, { target: { value: item.value }});

            expect(toggleButton).toHaveProperty("checked");
            // re-check with snapshot
            expect(container).toMatchSnapshot();
        })
    });
});
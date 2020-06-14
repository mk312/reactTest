import React from 'react';
import {Simulate} from 'react-dom/test-utils';
import {render} from '@testing-library/react'

import Search from '../index';

let container = null;

describe('App', () => {
    beforeEach(() => {
        container = render(<Search />);
    });
    it('should toggle between Genre/Title when one of them is clicked', () => {
        const radio = [
                {id:'filterValue1', value: 'TITLE'},
                {id:'filterValue2', value: 'GENRE'},
            ]
        radio.forEach ((item) => {
            const toggleButton =document.getElementById(`${item.id}`);
            Simulate.change(toggleButton, { target: { value: item.value }});

            expect(toggleButton).toHaveProperty("checked");
            // re-check with snapshot
            expect(container).toMatchSnapshot();
        })
    });
});
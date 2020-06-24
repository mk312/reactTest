import React from 'react';
import  ReactDOM from "react-dom";
import {Simulate} from 'react-dom/test-utils';
import {render, fireEvent, screen} from '@testing-library/react'

import { moviesList } from './../../mockMoviesList';

import ErorBoundary from '../index';

let container = null;
let BrokenElement = function BrokenElement() {
    return <div>{props.error}</div>;
};
let Element = function Element() {
    return <div></div>;
};

describe('ErorBoundary', () => {
    it('should show Error notification for user', () => {
        container = render(<ErorBoundary><BrokenElement/></ErorBoundary>).container;
        expect(container).toMatchSnapshot();
    });
    it('should not show anything', () => {
        container = render(<ErorBoundary><Element/></ErorBoundary>).container;
        expect(container).toMatchSnapshot();
    });
});
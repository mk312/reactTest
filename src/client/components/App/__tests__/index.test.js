import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './../../../reducers/reducer';
import ReduxThunk from 'redux-thunk';
import {Simulate} from 'react-dom/test-utils';
import {render, fireEvent} from '@testing-library/react'
import { moviesList } from './../../mockMoviesList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('*', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({data: moviesList.data}))
    }),
);

import App from '../index';

let container = null;
let store  = createStore(reducer, applyMiddleware(ReduxThunk));
describe('App', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    beforeEach(() => {
        store = createStore(reducer, applyMiddleware(ReduxThunk));
        container = render(
            <Provider store={store}>
                <App info='React Test App, PartI'/>
            </Provider>
        ).container;
    });

    it('should render first view',  ()  => {
        expect(container).toMatchSnapshot();
    });

    it('should dispatch SHOW_MOVIE and show one particular movie', ()  => {
        store.dispatch({type: 'SHOW_MOVIE', chosenMovie: moviesList.data[0]});
        expect(store.getState().chosenMovie).toBe( moviesList.data[0]);
        expect(container).toMatchSnapshot();
    });

    it('should show new itemsList result/no_items_found) when search is submitted', () => {
        const searchForm = document.querySelector('.js-search-form');
        fireEvent.submit( searchForm );
        expect(store.getState().moviesList).toBe(moviesList.data);
        // expect(store.getState().moviesList).toStrictEqual( []);
        // expect(container).toMatchSnapshot();
    });
});
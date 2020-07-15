import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Simulate } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { reducer } from '../../../reducers/reducer';

import Search from '../index';
import { moviesList } from '../../mockMoviesList';

let container = null;
let store = createStore(reducer, applyMiddleware(ReduxThunk));

describe('App', () => {
  beforeAll(() => {
    const mockSuccessResponse = { data: moviesList.data };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse),
    }));
  });
  beforeEach(() => {
    store = createStore(reducer, applyMiddleware(ReduxThunk));
    container = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    ).container;
  });
  it('should toggle between Genre/Title when one of them is clicked', () => {
    const radio = [
      { id: 'filterValue1', value: 'TITLE' },
      { id: 'filterValue2', value: 'GENRE' },
    ];
    radio.forEach((item) => {
      const toggleButton = document.getElementById(`${item.id}`);
      Simulate.change(toggleButton, { target: { value: item.value } });

      expect(toggleButton).toHaveProperty('checked');
      // re-check with snapshot
      expect(container).toMatchSnapshot();
    });
  });
});

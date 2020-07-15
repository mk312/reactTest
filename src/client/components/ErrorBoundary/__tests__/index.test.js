import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ErorBoundary from '../index';

let container = null;
const BrokenElement = function BrokenElement() {
  return <div>{props.error}</div>;
};
const Element = function Element() {
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

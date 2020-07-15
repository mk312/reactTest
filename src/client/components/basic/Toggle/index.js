// @flow
import React from 'react';
import styled from 'styled-components';

type Values = [{
    id: string,
    value: string
}]

type Props = {
    values: Values,
    filterValue: string,
    handleFilterChange: (event: SyntheticEvent<HTMLButtonElement>) => {}
};

const StyledWrapper = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    display: inline-flex;
    
    .highlighted-choice {
        transition-duration: 1.5s;
        transition-property: background-color;
        
        &:hover {
           background-color: #fedc56;
        }   
    }
`;

const Toggle = (props: Props) => (
  <StyledWrapper>
    {props.values.map((input) => (
      <div key={input.id}>
        <input className={'js-toggle-radio-button'}
          type="radio" id={input.id}
          name="contact"
          value={input.value}
          onChange={props.handleFilterChange}
          defaultChecked={props.filterValue === input.value}/>
        <label className="highlighted-choice" htmlFor={input.id}>{input.value}</label>
      </div>))}
  </StyledWrapper>
);

export default Toggle;

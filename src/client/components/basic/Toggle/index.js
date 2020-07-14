import React from 'react';

const Toggle = (props) => (
  <React.Fragment>
    {props.values.map((input) => (
      <React.Fragment key={input.id}>
        <input className={'js-toggle-radio-button'}
          type="radio" id={input.id}
          name="contact"
          value={input.value}
          onChange={props.handleFilterChange}
          defaultChecked={props.filterValue === input.value}/>
        <label htmlFor={input.id}>{input.value}</label>
      </React.Fragment>))}
  </React.Fragment>
);

export default Toggle;

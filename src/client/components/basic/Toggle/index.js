import React from 'react';

const Toggle = (props) => (
    <React.Fragment>
        {props.values.map((input) => (
            <React.Fragment key={input.id}>
                <input type="radio" id={input.id} name="contact" value={input.value}
                       onChange={props.handleFilterChange}
                       checked={props.filterValue === input.value}/>
                <label htmlFor={input.id}>{input.value}</label>
            </React.Fragment>)
        )}
    </React.Fragment>
)

export default Toggle;
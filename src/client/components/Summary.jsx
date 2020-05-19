import React, { PureComponent } from 'react';
// Case 3

export default class Summary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            meetingDate: ''
        };
        this.handleClick = () => {
            this.setState({ meetingDate: 'Tomorrow' })
        };
    }
    render() {
        return (
           <div>
            <h3>See you { this.state.meetingDate ? this.state.meetingDate : 'soon'} {this.props.username}!</h3>
            { !this.state.meetingDate ?
                <button onClick={() => this.handleClick()} >Arrange meeting with us tomorrow</button> :
                <p>You have arranged a meeting!</p>
            }
           </div>
        );
    }
}
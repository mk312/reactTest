import React, { Component } from 'react';
// Case 2

export default class PostScriptum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userstatus: "guest"
        };
        this.handleClick = () => {
            this.setState({ userstatus: 'Admin' })
        };
    }
    render() {
        return (
            <div>
                <h4><em>P.S. Dear {this.props.username}, your status is '{this.state.userstatus}'.</em></h4>
                {this.state.userstatus != 'Admin' ?
                    <button onClick={() => this.handleClick()}>Make me an admin</button> :
                    <p> You are an admin now!</p>
                }
            </div>
        );
    }
}
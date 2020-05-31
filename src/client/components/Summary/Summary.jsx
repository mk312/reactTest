import styles from './styles.scss';

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
           <div className={styles.wrapper}>
            <h3>See you { this.state.meetingDate ? this.state.meetingDate : 'soon'} {this.props.username}!</h3>
            { !this.state.meetingDate ?
                <button className={`${styles.inner} ${styles.highlited}`} onClick={() => this.handleClick()} >Arrange meeting with us tomorrow</button> :
                <p className={styles.inner}>You have arranged a <span className={styles.highlited}>meeting</span>!</p>
            }
           </div>
        );
    }
}
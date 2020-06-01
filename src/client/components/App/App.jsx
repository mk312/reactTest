import styles from './styles.scss';

import React, { Component } from 'react';
import Article from '../Article/Article.jsx';
import Summary from '../Summary/Summary.jsx';
import Title from '../Title/Title.jsx';
import PostScriptum from '../PostScriptum/PostScriptum.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.username = 'World'
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <em>details: {this.props.info}</em>
                <Title username={this.username}/>
                <Article username={this.username} text='Where have you been?'/>
                <Article username={this.username} text='We were missing you...'/>
                <Summary username={this.username}/>
                <PostScriptum username={this.username}/>
            </div>
        );
    }
}
import React, { Component } from 'react';
import '@babel/polyfill';
import { moviesList } from './../mockMoviesList';
import { connect } from 'react-redux';
import {showMovie} from '../../actions/actions';

import ErrorBoundary from '../ErrorBoundary/';
import Search from '../Search/';
import ItemsList from '../ItemsList/';
import MovieDetails from '../MovieDetails/';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleMovieClick = (id) => {
            let clickedMovie = this.props.moviesList.find((movieItem) => id == movieItem.id);
            this.props.onShowMovie(clickedMovie);
        };
    }

    render() {
        return (
            <div>
                <em>details: {this.props.info}</em>
                <ErrorBoundary>
                    { !this.props.chosenMovie ?
                        <Search/> :
                        <MovieDetails movie={this.props.chosenMovie}/>
                    }
                </ErrorBoundary>

                <ErrorBoundary>
                    <ItemsList
                        handleMovieClick={this.handleMovieClick}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            moviesList: state.moviesList,
            chosenMovie: state.chosenMovie,
        };
    },
    (dispatch) => {
        return {
            onShowMovie: (clickedMovie) => dispatch(showMovie(clickedMovie)),
        }
    },
)(App);
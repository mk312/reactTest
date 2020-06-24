import React, { Component } from 'react';
import { moviesList } from './../mockMoviesList';

import ErrorBoundary from '../ErrorBoundary/';
import Search from '../Search/';
import ItemsList from '../ItemsList/';
import MovieDetails from '../MovieDetails/';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedMovie: null,
            searchResult: moviesList,
        };
        this.handleMovieClick = (id) => {
            this.setState({
                clickedMovie: moviesList.find((movieItem) => id == movieItem.id,
            )});
        };
        this.searchMovies = (searchParams) => {
            if( searchParams.searchValue !== 'Quentin Tarantino' ){
                this.setState({searchResult: []});
            } else {
                this.setState({searchResult: moviesList});
            }
        };
    }

    render() {
        return (
            <div>
                <em>details: {this.props.info}</em>
                <ErrorBoundary>
                    { !this.state.clickedMovie ?
                        <Search searchMovies={this.searchMovies}/> :
                        <MovieDetails movie={this.state.clickedMovie}/>
                    }
                </ErrorBoundary>

                <ErrorBoundary>
                    <ItemsList
                        moviesList={this.state.searchResult}
                        handleMovieClick={this.handleMovieClick}/>
                </ErrorBoundary>
            </div>
        );
    }
}
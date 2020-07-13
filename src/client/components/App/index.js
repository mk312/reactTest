import React, { Component } from 'react';
import '@babel/polyfill';
import { moviesList } from './../mockMoviesList';
import { connect } from 'react-redux';
import {BrowserRouter,StaticRouter, Switch, Route, useParams, Redirect } from "react-router-dom";
import {showMovie} from '../../actions/actions';

import ErrorBoundary from '../ErrorBoundary/';
import Search from '../Search/';
import ItemsList from '../ItemsList/';
import MovieDetails from '../MovieDetails/';
import Page404 from '../Page404/';

import { withRouter  } from 'next/router';

const GetIdMovieDetails = (props) => {
    const {id} = useParams();
    return (
        <MovieDetails movie={props.movie} id={id}/>
    );
};

const isServer = typeof window === 'undefined';
const Router = isServer ? StaticRouter : BrowserRouter;
const GetValSearch = (props) => {
    const {searchValue} = useParams();
    return (
        <Search searchValue={searchValue}/>
    );
};

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
            <Router location={isServer ? this.props.router.asPath : ''}>
                <Switch>
                    <Route path="/404">
                        <Page404/>
                    </Route>

                    <Route path="*">
                        <div>
                            <em>details: {this.props.info}</em>
                            <ErrorBoundary>
                                <Switch>
                                    <Route exact path="/">
                                        <GetValSearch/>
                                    </Route>
                                    <Route path="/search/:searchValue">
                                        <GetValSearch/>
                                    </Route>
                                     <Route path="/search">
                                        <Search searchValue={this.props.searchValue}/>
                                    </Route>
                                    <Route path="/movie/:id">
                                        <GetIdMovieDetails movie={this.props.moviesList[0]} />
                                    </Route>
                                    <Route path="/movie">
                                        <MovieDetails id={this.props.id}/>
                                    </Route>
                                    <Route path="*">
                                        <Redirect to="/404" />
                                    </Route>
                                </Switch>
                            </ErrorBoundary>

                            <ErrorBoundary>
                                <ItemsList
                                    handleMovieClick={this.handleMovieClick}/>
                            </ErrorBoundary>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default withRouter(connect(
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
)(App));
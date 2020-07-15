import React, { Component } from 'react';
import '@babel/polyfill';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, useParams, Redirect,
} from 'react-router-dom';
import { showMovie } from '../../actions/actions';

import ErrorBoundary from '../ErrorBoundary';
import Search from '../Search';
import ItemsList from '../ItemsList';
import MovieDetails from '../MovieDetails';
import Page404 from '../Page404';

const GetIdMovieDetails = (props) => {
  const { id } = useParams();
  return (
    <MovieDetails movie={props.movie} id={id}/>
  );
};
const GetValSearch = (props) => {
  const { searchValue } = useParams();
  return (
    <Search searchValue={searchValue}/>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMovieClick = (id) => {
      window.scrollTo(0, 0);
      const clickedMovie = this.props.moviesList.find((movieItem) => id === movieItem.id);
      this.props.onShowMovie(clickedMovie);
    };
  }

  render() {
    return (
      <Router>
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
                  <Route path="/movie/:id">
                    <GetIdMovieDetails movie={this.props.moviesList[0]} />
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

export default connect(
  (state) => ({
    moviesList: state.moviesList,
    chosenMovie: state.chosenMovie,
  }),
  (dispatch) => ({
    onShowMovie: (clickedMovie) => dispatch(showMovie(clickedMovie)),
  }),
)(App);

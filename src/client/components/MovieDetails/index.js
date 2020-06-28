import styles from './styles.scss';
import React, { PureComponent } from 'react';
import '@babel/polyfill';
import { connect } from 'react-redux';
import {hideMovieDetails} from '../../actions/actions';

class MovieDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.handleCloseClick = (id) => {
            this.props.onHideMovie(this.props.searchParams);
        };
    }
    render() {
        return (
            <div className={`js-movie-details ${styles.wrapper}`}>
                <img className={styles.poster} src={this.props.chosenMovie.poster_path}></img>
                <div className={styles.title}>{this.props.chosenMovie.title}
                <div className={styles.rating}>{this.props.chosenMovie.vote_average}</div></div>
                <div>{this.props.chosenMovie.tagline}</div>
                <div className={styles.release}>{this.props.chosenMovie.release_date} </div>
                <div className={styles.runtime}>{this.props.chosenMovie.runtime} min</div>
                <div className={styles.overview}>{this.props.chosenMovie.overview} min</div>
                <a href="#" className={styles.close} onClick={() => this.handleCloseClick()}></a>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            chosenMovie: state.chosenMovie,
            searchParams: state.searchParams,
        };
    },
    (dispatch) => {
        return {
            onHideMovie: (searchParams) => dispatch(hideMovieDetails(searchParams)),
        }
    },
)(MovieDetails);
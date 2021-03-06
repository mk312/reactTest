import styles from './styles.scss';
import React, { PureComponent } from 'react';
import '@babel/polyfill';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { hideMovieDetails, requestMovie } from '../../actions/actions';

class MovieDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.handleCloseClick = (id) => {
            this.props.onHideMovie(this.props.searchParams);
        };
    }
    componentDidMount() {
        const { id, chosenMovie } = this.props;
        if(!chosenMovie || !(chosenMovie.id == id)) {
            this.props.onRequestMovie(id);
        }
    }

    render() {
            return (
                <div className={`js-movie-details ${styles.wrapper}`}>
                {this.props.chosenMovie?
                    <React.Fragment>
                        <img className={styles.poster} src={this.props.chosenMovie.poster_path}></img>
                        <div className={styles.title}>{this.props.chosenMovie.title}
                            <div className={styles.rating}>{this.props.chosenMovie.vote_average}</div>
                        </div>
                        <div>{this.props.chosenMovie.tagline}</div>
                        <div className={styles.release}>{this.props.chosenMovie.release_date} </div>
                        <div className={styles.runtime}>{this.props.chosenMovie.runtime} min</div>
                        <div className={styles.overview}>{this.props.chosenMovie.overview} min</div>
                        <Link  to={'/'} onClick={() => this.handleCloseClick()}
                               className={styles.close}/>
                    </React.Fragment> : null
                }
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
            onRequestMovie: (id) => dispatch(requestMovie(id)),
        }
    },
)(MovieDetails);
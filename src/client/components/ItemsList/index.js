import styles from './styles.scss';

import React, { PureComponent } from 'react';
import '@babel/polyfill';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { updateSorting, requestMoviesArr, updateMoviesPage } from '../../actions/actions';

import Toggle from '../basic/Toggle/';

class ItemsList extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSortingChange = (event) => {
            this.props.onUpdateSorting(event.target.value);
            this.props.onUpdateMoviesPage(0);
            this.props.onRequestMoviesArr({...this.props.searchParams, offset:0, sortBy: event.target.value});
        };
        this.handleScroll = () =>{
            if(document.body.offsetHeight < window.innerHeight + document.body.scrollTop + 1) {
                let newOffset = this.props.searchParams.offset +1;
                this.props.onUpdateMoviesPage(newOffset);
                this.props.onRequestMoviesArr({...this.props.searchParams, offset: newOffset}, this.props.choosenMovie);
            }
        }
    }

    componentDidMount() {
        this.props.onRequestMoviesArr(this.props.searchParams);
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.result}>
                    { this.props.chosenMovie ? (
                            <div className={styles.number}>Films by {this.props.chosenMovie.genres.join(', ')} genre</div>
                        ):
                        (<React.Fragment>
                            <div className={styles.number}>{this.props.moviesList.length || 0} movies found</div>
                            <div className={styles.sort}>
                                <div className={styles.sortTitle}>SORT BY</div>

                                <Toggle handleFilterChange={this.handleSortingChange}
                                        filterValue={this.props.searchParams.sortBy}
                                        values={[{value: 'DATE', id: 'sv1'}, {value: 'RATING', id: 'sv2'}]} />
                            </div>
                        </React.Fragment>)
                    }
                </div>

                <div className={styles.list}>
                    {this.props.moviesList.map((movie) => (
                        <div key={movie.id} className={`js-movie-item ${styles.movie}`}>
                            <Link to={'/movie/'+ movie.id} onClick={() => this.props.handleMovieClick(movie.id)}>
                                <img className={styles.poster} src={movie.poster_path}/>
                            </Link>
                            <div className={styles.title}>{movie.title}</div>
                            <div className={styles.release}>{movie.release_date}</div>
                            <div className={styles.genre}>{movie.genres.join(', ')}</div>
                        </div>
                    ))}
                    { this.props.moviesList.length === 0 ?
                        <div className={styles.error}>No items found</div>
                        : null
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => {
        return {
            moviesList: state.moviesList,
            searchParams: state.searchParams,
            chosenMovie: state.chosenMovie,
        };
    },
    (dispatch) => {
        return {
            onUpdateSorting: (sortBy) => dispatch(updateSorting(sortBy)),
            onUpdateMoviesPage: (offset) => dispatch(updateMoviesPage(offset)),
            onRequestMoviesArr: (searchParams, choosenMovie) => dispatch(requestMoviesArr(searchParams, choosenMovie)),
        }
    },
)(ItemsList);
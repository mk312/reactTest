import styles from './styles.scss';

import React, { PureComponent } from 'react';
import Toggle from '../basic/Toggle/';
export default class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sortingValue: 'RATING',
        };
        this.handleSortingChange = (event) => {
            this.setState({sortingValue: event.target.value});
        };
    }
    render() {
        // check for ErrorBoundary:
        // throw new Error('I crashed!');
        return (
            <React.Fragment>
                <div className={styles.result}>
                    <div className={styles.number}>{this.props.moviesList.length || 0} movies found</div>
                    <div className={styles.sort}>
                        <div className={styles.sortTitle}>SORT BY {this.state.filterValue}</div>

                        <Toggle handleFilterChange={this.handleSortingChange}
                                filterValue={this.state.sortingValue}
                                values={[{value: 'DATE', id: 'sv1'}, {value: 'RATING', id: 'sv2'}]} />
                    </div>
                </div>

                <div className={styles.list}>
                    {this.props.moviesList.map((movie) => (
                        <div key={movie.id} className={styles.movie}>
                            <a href='#' onClick={() => this.props.handleMovieClick(movie.id)}>
                                <img className={styles.poster} src={movie.poster_path}/>
                            </a>
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
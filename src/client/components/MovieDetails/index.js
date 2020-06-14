import styles from './styles.scss';
import React from 'react';

const MovieDetails = (props) => (
    <div className={`js-movie-details ${styles.wrapper}`}>
        <img className={styles.poster} src={props.movie.poster_path}></img>
        <div className={styles.title}>{props.movie.title}        <div className={styles.rating}>{props.movie.vote_average}</div></div>
        <div>{props.movie.tagline}</div>
        <div className={styles.release}>{props.movie.release_date} </div>
        <div className={styles.runtime}>{props.movie.runtime} min</div>
        <div className={styles.overview}>{props.movie.overview} min</div>
    </div>
);

export default MovieDetails
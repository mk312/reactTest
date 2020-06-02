import img from './search_bg.jpg';
import styles from './styles.scss';

import React, { PureComponent } from 'react';
import Toggle from '../basic/Toggle/';

export default class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: 'Quentin Tarantino',
            filterValue: 'TITLE',
        };
        this.handleSearchChange = (event) => {
            this.setState({searchValue: event.target.value});
        };
        this.handleFilterChange = (event) => {
            this.setState({filterValue: event.target.value});
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.searchMovies({
                searchValue: this.state.searchValue,
                filterValue: this.state.filterValue,
            });
        };
    }

    render() {
        return (
           <form className={styles.wrapper} onSubmit={this.handleSubmit}>
               <div className={'row'}>
                   <div className={styles.title}>FIND YOUR MOVIE</div>
                   <input className={styles.input} type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
                   <input className={styles.submit} type="submit" value="SEARCH"/>
               </div>

               <div className={'row'}>
                   <div className={styles.filter}>SEARCH BY {this.state.filterValue}</div>
                   <Toggle handleFilterChange={this.handleFilterChange}
                           filterValue={this.state.filterValue}
                           values={[{value: 'TITLE', id: 'filterValue1'}, {value: 'GENRE', id: 'filterValue2'}]} />
               </div>
           </form>
        );
    }
}
import img from './search_bg.jpg';
import styles from './styles.scss';

import React, { PureComponent } from 'react';
import '@babel/polyfill';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {updateSearchWord, updateFilter, requestMoviesArr, updateMoviesPage} from '../../actions/actions';

import Toggle from '../basic/Toggle/';

class Search extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSearchChange = (event) => {
            this.props.onUpdateSearchWord(event.target.value);
        };
        this.handleFilterChange = (event) => {
            this.props.onUpdateFilter(event.target.value);
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.onUpdateMoviesPage(0);
            this.props.onRequestMoviesArr({...this.props.searchParams, offset: 0});
            const newUrl = '/' + (this.props.searchParams.searchWord ? 'search/' + this.props.searchParams.searchWord : '');
            this.props.history.push({
                pathname: newUrl,
            })
        };
    }

    componentDidMount() {
        const { searchValue } = this.props;
        if(searchValue) {
            this.props.onUpdateMoviesPage(0);
            this.props.onUpdateSearchWord(searchValue);
            this.props.onRequestMoviesArr({...this.props.searchParams, searchWord: searchValue, offset: 0} );
        }
    }

    render() {
        return (
           <form className={`js-search-form ${styles.wrapper}`} onSubmit={this.handleSubmit}>
               <div className={'row'}>
                   <div className={styles.title}>FIND YOUR MOVIE</div>
                   <input className={`js-search-input ${styles.input}`} type="text" value={this.props.searchParams.searchWord} onChange={this.handleSearchChange} />
                   <input className={styles.submit} type="submit" value="SEARCH"/>
               </div>

               <div className={'row'}>
                   <div className={styles.filter}>SEARCH BY {this.props.searchParams.filterBy}</div>
                   <Toggle handleFilterChange={this.handleFilterChange}
                           filterValue={this.props.searchParams.filterBy}
                           values={[{value: 'TITLE', id: 'filterValue1'}, {value: 'GENRE', id: 'filterValue2'}]} />
               </div>
           </form>
        );
    }
}

export default withRouter(connect(
    (state) => {
        return {
            searchParams: state.searchParams,
        };
    },
    (dispatch) => {
        return {
            onUpdateSearchWord: (searchWord) => dispatch(updateSearchWord(searchWord)),
            onUpdateFilter: (filterBy) => dispatch(updateFilter(filterBy)),
            onUpdateMoviesPage: (offset) => dispatch(updateMoviesPage(offset)),
            onRequestMoviesArr: (searchParams) => dispatch(requestMoviesArr(searchParams)),
        }
    },
)(Search));
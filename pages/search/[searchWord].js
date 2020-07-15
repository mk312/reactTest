import App from '../../src/client/components/App';

const AppPrefetchedMovieList = (props) => (
    <App fetchedMovie={props.data.fetchedMovieList}/>
)

export async function getServerSideProps ({ req, query, params }) {
    let reqestParamsArr = [];
    reqestParamsArr.push(`search=${query.searchWord}`);
    reqestParamsArr.push(`sortBy=release_date&sortOrder=desc`);
    reqestParamsArr.push(`searchBy=title`);
    reqestParamsArr.push('limit=15');

    let requestPostfix = reqestParamsArr.length && ('?' + reqestParamsArr.join('&'));

    const response = await fetch('https://reactjs-cdp.herokuapp.com/movies' + requestPostfix);
    const res = await response.json();
    const data = { fetchedMovieList: res};
    return { props: { data } };
}

export default AppPrefetchedMovieList;
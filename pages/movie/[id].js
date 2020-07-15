import App from '../../src/client/components/App/index';

const AppPrefetchedMovie = (props) => (
    <App fetchedMovie={props.data.fetchedMovie}/>
)

export async function getServerSideProps ({ req, query, params }) {
    const response = await fetch('https://reactjs-cdp.herokuapp.com/movies/' + query.id);
    const res = await response.json();
    const data = { fetchedMovie: res};
    return { props: { data } };
}

export default AppPrefetchedMovie;

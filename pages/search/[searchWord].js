import App from '../../src/client/components/App';

export async function getStaticPaths() {
    return {
        paths: [
            '/search/asd',
            { params: { searchWord: 'asd' } },
        ],
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const {searchWord} = params;
    return { props: { searchValue:  searchWord} }
}

export default App;
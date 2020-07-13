import App from '../../src/client/components/App/index';

export async function getStaticPaths() {
    return {
        paths: [
            '/movie/asd123123asd',
            { params: { id: 'asd123123asd' } },
        ],
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const {id} = params;
    return { props: { id: id } }
}

export default App

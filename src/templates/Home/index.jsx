import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts'; // index.jsx
import { Button } from '../../components/Button';
import { loadPosts } from '../../utils/load-posts';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

    state = {
        posts: [],
        allPosts: [],
        startPage: 0,
        postsPerPage: 2,
        searchValue: ''
    }

    async componentDidMount() {
        await this.loadPosts();
    }

    loadPosts = async () => {

        const { startPage, postsPerPage } = this.state;

        const postsAndPhotos = await loadPosts();

        this.setState({
            allPosts: postsAndPhotos,
            posts: postsAndPhotos.slice(startPage, postsPerPage) // select apenas alguns posts por vez p/ mostrar na pag
        });
    }

    loadMorePosts = () => {

        const { posts, allPosts, startPage, postsPerPage } = this.state;

        const nextPage = startPage + postsPerPage;

        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        // nextPosts é um array, sem dar spread ele seria add como um array: [ x, x, x, [x, x, x] ]
        posts.push(...nextPosts);

        this.setState({ posts, startPage: nextPage })
    }

    handleSearchChange = (e) => {

        let {value} = e.target;  // let value = e.target.value

        this.setState( { searchValue: value } );
    }

    render() {

        const { posts, startPage, postsPerPage, allPosts, searchValue } = this.state;

        // verifica se há mais posts para serem carregados na pagina ou se ja foram carregados todos
        const noMorePosts = ( startPage + postsPerPage >= allPosts.length );

        // operaçao com operador ternario - se nao houver busca (searchValue), retorna todos os posts. 
        // Se houver, retorna os valores que contêm (includes) no title o valor da busca
        const filteredPosts = (!searchValue) ? posts : allPosts.filter( value => {
            
            return value.title.toLowerCase().includes( searchValue.toLowerCase() );
        });

        
        return (
            <section className="container">

                <div className='search-container'>

                    {!(!searchValue) && ( // EXPLICAÇOES nas notas - mostra o h1 apenas se serachValue nao for vazia

                        <h1>Search value: {searchValue}</h1>
                    )}

                    <TextInput handleChange={this.handleSearchChange}/>
                </div>
                

                { (filteredPosts.length > 0) && (

                    <Posts posts={filteredPosts} />    /** aqui estamos passando os props (posts = {posts}) */
                )}

                {(filteredPosts.length === 0) && (

                    <p>Nenhum post corresponde à pesquisa</p>
                )}


                <div className='button-container'>
                    {!searchValue && (
                        <Button
                        text={'Load more posts'}
                        onClick={this.loadMorePosts}
                        isDisabled={noMorePosts}
                        />
                    )}
                </div>
            </section>
        );
    }
}



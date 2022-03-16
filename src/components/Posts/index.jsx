import './styles.css';
import { PostCard } from './../PostCard';//index.jsx - nao precisa colocar pq index é o file padrao de importaçao

export const Posts = ( {posts} ) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard 
                key= {post.id} // Each child in a list should have a unique "key" prop.
                id = {post.id} // esses sao os 'props'
                title = {post.title}
                body = {post.body}
                cover = {post.cover}
                // posts = {posts} // poderia ser assim, e enviariamos tudo dentro de um obj
            />
        ))}
    </div>
)
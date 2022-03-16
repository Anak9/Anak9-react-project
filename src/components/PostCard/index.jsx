import './styles.css';

export const PostCard = ({ title, body, cover }) => ( // note que aqui é um '(' e nao um '{'
    <div className="post"> 
        <img src={cover} alt={title}></img> 
        <div className="post-content">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
)
// nao precisa de return porque nao tem logica dentro da funçao construtora PostCard()

/*
export const PostCard = ( props ) => {

    const post = props;

    return (
        <div className="post">
            <img src={post.cover} alt={post.title}></img>
            <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}
*/
import { Component } from "react"; // atribuiçao por desestruturaçao

class Class2 extends Component{

    // dessa maneira nao precisamos criar um construtor
    state = {
        posts: []
    }

    // called immediately after the component is mounted(montado) -we called the data from here (from database ...)
    // 'mounting' é quando um componente é renderizado para o DOM pela primeira vez  
    componentDidMount(){
        
        this.setState( { posts: [
            {
                id: 1,
                title: 'Olá',
                body: 'Texto escrito nesse local'
            },
            {
                id: 2,
                title: 'Tudo',
                body: 'Zero criatividade aqui'
            },
            {
                id: 3,
                title: 'Bem',
                body: 'Estou com pressa, ok?'
            }
        ]});
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }

    // as funçoes padrao do React sao declaradas assim
    // render() é chamado toda vez que o State é atualizado
    render(){

        const { posts } = this.state;

        return (
            <div className="">

                {posts.map( value => (  // aqui usamos '(' ao inves de '{' 

                    <div key={value.id}>     {/* elemento root */} 
                        <h1>{value.title}</h1> 
                        <p>{value.body}</p>
                    </div>

                ))}
            </div>
        )
    }
}

export default Class2;
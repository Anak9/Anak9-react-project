import logo from './logo.svg'
import './App.css';
import React from 'react';

class Class1 extends React.Component{

    constructor(props){
        
        super(props);

        // bind - permite que usemos valores 'this' dentro da funçao
        this.handlePClick = this.handlePClick.bind(this);

        this.state = {
            name: 'Sarah Elias',
            count: 0
        }
    }

    handlePClick(){
        
        const { name } = this.state; // atribuiçao por desestruturaçao

        // para usar valores 'this' dentro do metodo, temos que dar bind nele
        console.log(`A click happened here. My name is ${name}`);
    }

    // uma arrow func nao cria escopo (nao tem this proprio), entao podemos usar o this referente à classe
    // dentro da arrow func sem dar bind
    handleALinkClick = (event) => {

        // nesse caso, o event padrao é abrir o link indicado pelo 'href' na tag '<a>'
        event.preventDefault();

        // recuperamos o valor atual da variavel count
        const { count } = this.state;
        this.setState( {count: count + 1 } );

        // note que aqui nao precisamos pegar o valor inicial da variavel name
        this.setState( {name: 'Marcia'} );
    }

    render(){

        const { name, count } = this.state; // atribuiçao por desestruturaçao

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p onClick = { this.handlePClick }>
                        My name is {name} and the count is {count}
                    </p>
                    <a
                    onClick={this.handleALinkClick}
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div> 
        );
    }

}

export default Class1;
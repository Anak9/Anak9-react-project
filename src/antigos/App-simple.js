import logo from './logo.svg';
import './App.css';

// componente - o nome tem que começar com letra maiuscula
function App() {
  return ( // tudo aqui dentro é JSX - parece HTML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> // so podemos retornar um elemento root com seus filhos - nao podemos retornar elementos irmaos
  // <div>   div irmã da div acima
  //    componentes filhos dessa div
  // </div>
  );
}

export default App;
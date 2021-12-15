import logo from './logo.svg';
import './App.css';

function App() {
    const name = '혜인'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        {name ==='혜인' ? (<p>name is hyein</p>):(<p>name is ! hyein</p>)}
        </div>
        <p>{name} hello react world!!!</p>
        <a
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

export default App;

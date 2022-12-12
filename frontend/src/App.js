import React from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  margin: 10
}

function Button(props) {
  return <button style={{...props.style, fontSize: props.textSize}}>{props.children}</button>
}

function App() {
  return (
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
        <Button style={styles} textSize={20}>Button 1</Button>
        <Button style={styles}>Button 2</Button>
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './assets/img/logo-kasa.svg';
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

        <Button style={styles}>Button 2</Button>
      </header>
    </div>
  );
}

export default App;
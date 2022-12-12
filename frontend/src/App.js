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
        <Button style={styles}>Button 2</Button>
      </header>
    </div>
  );
}

export default App;
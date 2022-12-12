import React from 'react';
import {Navbar} from './components/header/navbar/Navbar.jsx';

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
        <Navbar />
      </header>


      <Button style={styles}>Button 2</Button>
    </div>
  );
}

export default App;
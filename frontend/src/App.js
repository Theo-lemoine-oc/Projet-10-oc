import React from 'react';
import {Navbar} from './components/header/navbar/Navbar.jsx';
import {BannerHero} from './components/header/bannerHero/BannerHero.jsx';
import {Locations} from './components/locations/Locations.jsx';
/*
const styles = {
  margin: 10
}

function Button(props) {
  return <button style={{...props.style, fontSize: props.textSize}}>{props.children}</button>
}

Utilisation :
<Button style={styles}>Button 2</Button>
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BannerHero />
      </header>

      <main>
        <Locations />
      </main>


    </div>
  );
}

export default App;
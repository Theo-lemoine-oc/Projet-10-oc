import React from 'react';
import {Navbar} from './components/header/navbar/Navbar.jsx';
import {BannerHero} from './components/header/bannerHero/BannerHero.jsx';
import {Locations} from './components/locations/Locations.jsx';
import {Footer} from './components/footer/Footer.jsx';

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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


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
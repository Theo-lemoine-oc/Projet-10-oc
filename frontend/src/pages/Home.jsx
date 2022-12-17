import React from 'react';
import {BannerHero} from '../components/header/bannerHero/BannerHero.jsx';
import {Locations} from '../components/locations/Locations.jsx';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerHero />
      </header>

      <main>
        <Locations />
      </main>
    </div>
  );
}

export default Home;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return <div className="App">

      <div>
        <Travel
          destination="Praslin"
          country="Seychelles"
          photo="https://images.national-tours.fr/(Image)-image-Seychelles-Source-argent-191-fo_32125672-09032017.jpg"
          distance="7000 km"
        />
        <Travel
          destination="Bora Bora"
          country="Tahiti Nui"
          photo="http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2018/07/bora-bora.jpg"
          distance="10 000 km"
        />
      </div>
    </div>

  }
}

export default App;

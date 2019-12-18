import React, { Component } from 'react';
import './App.css';
import Halaman from './component/Halaman';
import Login from './component/Login';

class App extends Component {
  render() {

    // document.body.style.backgroundImage = "url('https://www.wallpaperflare.com/static/306/130/551/glow-green-trees-aurora-borealis-wallpaper.jpg')";
    // document.body.style.backgroundPosition = "center";

    return (
      <div>
        <Halaman />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App
import React, { Component } from "react";
import "./App.css";
import Login from "./component/login/Login";
import Halaman from './component/Halaman.js'
import { BrowserRouter as Router } from "react-router-dom";
import { SwitchRouter } from "./SwitchRouter";

class App extends Component {
  render() {
    return (
      <Router>
        <SwitchRouter />
      </Router>
    );
  }
}

export default App;

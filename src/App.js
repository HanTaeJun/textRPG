import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';

import {Home} from "./Views/home";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';

import {Home} from "Views/home";
import {About} from "Views/about";
import {Menu} from "Views/menu";

class App extends Component {
  render() {
    return (
      <>
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch>
      </>
    );
  }
}

export default App;

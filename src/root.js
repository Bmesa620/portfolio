import React, { Component } from 'react';
import Entry from './entry';
import Navbar from './Website/nav';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


class Root extends Component{
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return(
  
    <HashRouter>
      <Navbar/>
    </HashRouter>

    )
  }
};

export default Root;
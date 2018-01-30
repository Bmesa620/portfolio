import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Home from './Website/home';
import Projects from './Website/projects'
import Contact from './Website/contact'
import About from './Website/about'

const Entry = (props) => {
    return (
        <div>
        	<Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/projects" component={ Projects } />
                <Route exact path="/contact" component={ Contact } />
                <Route exact path="/aboutme" component={ About } />
            </Switch>
        </div>
  );
};


export default Entry;
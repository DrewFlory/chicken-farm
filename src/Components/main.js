import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Products from './products';
import Contact from './mission';
import Mission from './mission';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/products" component={Products} />
    <Route path="/mission" component={Mission} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/app" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

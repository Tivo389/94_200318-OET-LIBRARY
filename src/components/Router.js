import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import App from '../App';
import NavigationBar from '../components/NavigationBar';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={App}/> */}
      <Route exact path="/" component={NavigationBar}/>
      <Route exact path="/navigation-bar" component={NavigationBar}/>
    </Switch>
  </BrowserRouter>
)

export default Router;
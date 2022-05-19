import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import NavigationBar from '../components/NavigationBar';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      {/* <Route exact path="/" component={NavigationBar}/> */}
      <Route exact path="/navigation-bar" element={<NavigationBar/>}/>
    </Routes>
  </BrowserRouter>
)

export default Router;
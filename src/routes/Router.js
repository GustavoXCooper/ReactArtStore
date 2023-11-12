import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from '../pages/Gallery';
import AboutMe from '../pages/AboutMe'


const Router = () => (
  <Routes>
    <Route path='/about-me' element={<AboutMe/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
  </Routes>
);

export default Router;
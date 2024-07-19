import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React, { useEffect }  from 'react';
import {  Route, Routes } from 'react-router-dom';


export default function MultiPageRoutes() {
    return (
            <Routes>
                <Route exact path={'/personal_portfolio'} element={<Home />} />
                <Route exact path={'/about'} element={<About />} />
                <Route exact path={'/portfolio'} element={<Portfolio />} />
            </Routes>
          
    )
}
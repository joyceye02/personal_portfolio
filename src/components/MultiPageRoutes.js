import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function RedirectHandler() {
    const location = useLocation();
    useEffect(() => {
      const redirect = new URLSearchParams(location.search).get('redirect');
      if (redirect) {
        window.history.replaceState(null, '', redirect);
      }
    }, [location]);
  
    return null;
}
export default function MultiPageRoutes() {
    return (
 
        <Routes>
            {/* <RedirectHandler /> */}
            <Route exact path={'/personal_portfolio'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
        </Routes>
       
    )
}
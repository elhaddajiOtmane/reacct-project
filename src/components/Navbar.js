
import React from "react";
import {Link} from 'react-router-dom';
import '../styling/Navbar.css';
function Navbar(){
    return(
        <>
        <div id="header">
        <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            
              <h1>MyStore</h1>
        
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li><a><Link to='/'>Home</Link></a></li>
              <li><a><Link to='/Books'>Books</Link></a></li>
              <li><a><Link to='/AboutUs'>AboutUs</Link></a></li>
             
            </ul>
          </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Navbar;
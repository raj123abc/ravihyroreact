import React from 'react';
import "./index.css";
import {NavLink} from 'react-router-dom';

// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css');


const Navb = () => {
    return (
        <>
            
            <div className="container-fluid nav_bg fixed-top shadow">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" className="heading" to="/">NAME OF FERM</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink 
                                            // activeClassName = "meanu_active"
                                            className="nav-link" 
                                            aria-current="page" to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                             activeClassName = "meanu_active"
                                             className="nav-link"
                                              aria-current="page" to="/contact">CONTACT</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                             activeClassName = "meanu_active"
                                             className="nav-link " 
                                             aria-current="page" to="/Service">SERVICES</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                              activeClassName = "meanu_active"
                                             className="nav-link " 
                                             aria-current="page" to="/Products">PRODUCTS</NavLink>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <NavLink 
                                             activeClassName = "meanu_active"
                                            className="nav-link"
                                             aria-current="page" to="/about">ABOUT US</NavLink>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    )
};

export default Navb;

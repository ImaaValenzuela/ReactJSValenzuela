import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom';
import logo from "../../assets/logo_batuk.svg";
import './navBar.css'

const NavBar = () => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="nav-link active" aria-current="page" to='/'> <img src={logo} width="66" alt="Batuk"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center">
                                <li className="nav-item"> 
                                    <NavLink className="nav-link li-hoover" to='/categoria/woman'>Woman</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link li-hoover" to='/categoria/man'>Man</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link li-hoover" to=''>Huoky</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to='cart'> <CartWidget/> </NavLink>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
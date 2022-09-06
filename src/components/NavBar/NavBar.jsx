import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo_batuk.svg";
import './navBar.css'

const NavBar = () => {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="nav-link active" aria-current="page" href="/"> <img src={logo} width="66" alt="Batuk"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link li-hoover" href="/">Woman</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link li-hoover" href="/">Man</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link li-hoover" href="/">Huoky</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> <CartWidget/> </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
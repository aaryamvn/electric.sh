import React from 'react'
import ElectricLogo from "../../static/images/electric.png"
import './Navbar.css';
import $ from 'jquery';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-between w-100 fixed-top">
            <span className="navbar__brand" href="#"><img src={ElectricLogo} alt="" className="navbar__logo" /> electric.</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
            {/* depending on what the link is, make a link active */}
                <a onClick={() => {$('#homeLink').addClass('active')}} id="homeLink" href='/' className="nav-item nav-link">Home</a>
                <a href='/packages' className="nav-item nav-link">Packages</a>
                <a href='/docs' className="nav-item nav-link">Documentation</a>
                <a href='/contribute' className="nav-item nav-link">Contribute</a>
            </ul>
        </nav>
    );
}

export default Navbar

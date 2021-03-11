import React from 'react'
import ElectricLogo from "../../static/images/electric.png"
import './Navbar.css'

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-between w-100 fixed-top">
            <span class="navbar__brand" href="#"><img src={ElectricLogo} alt="" class="navbar__logo" /> electric.</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home</a>
                <a class="nav-item nav-link" href="#">Documentation</a>
                <a class="nav-item nav-link" href="#">Contribute</a>
            </ul>
        </nav>
    )
}

export default Navbar

import React from 'react'
import ElectricLogo from "../../static/images/electric.png"
import './Navbar.css'

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg d-flex justify-content-between w-100">
            <span class="navbar__brand" href="#"><img src={ElectricLogo} alt="" class="navbar__logo"/> electric.</span>
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home</a>
                <a class="nav-item nav-link" href="#">Documentation</a>
                <a class="nav-item nav-link" href="#">Contribute</a>
            </div>
        </nav>
    )
}

export default Navbar
